const { Router } = require("express") ;
const { updateUser, deleteUser, getUser, getAllUsers} = require("../controllers/usersControllers");

const userRouter = Router();


//update user
userRouter.put("/users/:id", updateUser);

//delete user
userRouter.delete("/users/:id", deleteUser);

//get a user
userRouter.get("/users/:id", getUser );

//get all users
userRouter.get("/users", getAllUsers );


module.exports=userRouter