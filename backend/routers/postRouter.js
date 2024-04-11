const {Router} = require('express');
const { creatPost, updatePost, deletePost,getPost, getAllPost, getPostbyuser } = require('../controllers/postControllers');
const postRouter = Router();

//create a post
postRouter.post("/post",creatPost );
  
//update a post
postRouter.put("/post/:id",updatePost);

//delete a post
postRouter.delete("/post/:id", deletePost);


//get a post
postRouter.get("/post/:id",getPost);

//get posts by id
postRouter.get("/post/user/:id",getPostbyuser)

//get all post
postRouter.get("/post",getAllPost);

module.exports = postRouter