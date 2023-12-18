import { Blog,User } from "@prisma/client";
import { connectDB, prisma } from "./config/db";
import express, { Request, Response } from 'express';
import {v4 as uuidv4} from 'uuid';



const app =express()
const PORT = 3006

app.use(express.json())
connectDB()

app.get('/api/get',async (req:Request, res:Response)=>{
  const users = await prisma.user.findMany()
  return res.json(users)
})

app.post('/api/register',async (req:Request, res:Response)=>{
  const newUser = req.body as User
  await prisma.user.create({
  data:newUser
  })
  res.json("Register Done")
})

app.post('/api/login',async (req:Request, res:Response)=>{
  const {username, password} = req.body as User
  const users = await prisma.user.findFirst({where:{username:username,password:password}});
  if (users==null){
    return res.json("Username Or Password Is Not correct")
  }
  else{
    return res.json("Login successfully")
  }
})

app.put('/api/put/:id', async (req:Request, res:Response)=>{
  const {id} = req.params
  const newUser = req.body as User
  await prisma.user.update({
    where: {id:id},
    data:newUser
  })
  return res.json("update Done")
  })



// Blog

app.post("/blog/createBlog",async(req:Request,res:Response)=>{
  const NewBlog = req.body as Blog
  await prisma.blog.create({
    data:NewBlog
  })
  res.json("Blog Is Created")
})


app.get('/blog/getalluserwithblog/:id',async (req:Request, res:Response)=>{
  const {id} = req.params 
  const getallblog = await prisma.blog.findMany ({where:{user_id:id},
  select:{
    title:true,
    user_id:true,
    createdata:true,
    user:{select:{
      username:true,
      email:true}}
  }})
  return res.json(getallblog)
})


app.get('/blog/getAllBlog/',async (req:Request, res:Response)=>{
  const getAllBlog = await prisma.blog.findMany({
    select:{
      title:true,
      user_id:true,
      createdata:true,
      id:true,
      user:{select:{
        username:true,
        email:true}}
    }})
  return res.json(getAllBlog)
})


app.delete('/blog/delete/:id',async (req:Request, res:Response)=>{
  const {id} = req.params
  await prisma.blog.delete({
    where:{id:id}
  })
  res.json("Blog Has Been Deleted")
})




app.listen(PORT,()=>{
    console.log(`Server Listing ${PORT}`)
})


