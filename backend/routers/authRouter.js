const {Router} = require('express');
const {  register, login, forgetPassword } = require('../controllers/authControllers');

const authRouter = Router();

authRouter.post("/auth/login",login)
authRouter.post("/auth/register",register)
authRouter.post("/auth/forget",forgetPassword)



module.exports=authRouter