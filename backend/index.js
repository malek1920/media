const express = require ('express');
const authRouter = require('./routers/authRouter');
const cors = require("cors");
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');

require('./config/database').connect()
const app = express()
app.use(express.json())
app.use(cors())

app.use(authRouter)
app.use(userRouter)
app.use(postRouter)

app.listen(8888,()=>{console.log('listening to port 8888')})