import { User } from "@prisma/client";
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



app.post('/api/post',async (req:Request, res:Response)=>{
  const newUser = req.body as User
  await prisma.user.create({
  data:newUser
  })
  res.json("Create Done")
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

app.listen(PORT,()=>{
    console.log(`Server Listing ${PORT}`)
})


