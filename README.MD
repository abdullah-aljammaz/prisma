<h1>Prisma And Express With DataBase</h1>

<h3> Download Packages</h3>

```cmd
$ npm i
$ npx prisma db push
```

<hr>

<h3>Make .env File and insert</h3>

```env
DATABASE_URL="mysql://USER_NAME@IP:PORT/DATABASE_NAME"
```

<h3>User Routs</h3>

| Path                    | Method |
| ----------------------- | ------ |
| `/user/getAllUsers`     | GET    |
| `/user/register`        | POST   |
| `/user/login/`          | POST   |
| `/user/update/ENTER_ID` | PUT    |

<hr>

<h3>Blog Routs</h3>

| Path                                | Methos |
| ----------------------------------- | ------ |
| `/blog/createBlog`                  | POST   |
| `/blog/getAllUserWithBlog/ENTER_ID` | GET    |
| `/blog/getAllBlog`                  | GET    |
| `/blog/delete/ENTER_ID`             | DELETE |

<hr>

# Documentation

- [Node.Js](nodejs.org)
- [Prisma](https://www.prisma.io/)
- [Azure Studio](https://learn.microsoft.com/en-us/azure-data-studio/download-azure-data-studio?view=sql-server-ver16&tabs=win-install%2Cwin-user-install%2Credhat-install%2Cwindows-uninstall%2Credhat-uninstall)
- [Xampp](https://www.apachefriends.org/download.html)
