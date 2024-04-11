const Post = require('../model/post')

//create a post

module.exports.creatPost= async (req, res) => {
    const newPost = new Post(req.body);
    
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  

// //update a post

module.exports.updatePost=(req,res)=>{
  const{id} = req.params
  const{desc,likes,image}=req.body
  
  Post.findByIdAndUpdate(id,{desc,likes,image})
  .then(()=>{return res.status(200).json({msg:"the post has been updated"})})
  .catch((e)=>{return res.status(400).json({msg:e.message})})
}
  
  //delete a post

module.exports.deletePost= async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
     
        await post.deleteOne();
        res.status(200).json("the post has been deleted");
    
    } catch (err) {
      res.status(500).json(err);
    }
  };



  //get a post

 module.exports.getPost=async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  module.exports.getPostbyuser =async (req, res) => {
    try{
      const user =  await Post.find({userId : req.params.id})
       return res.json(user);
    }catch(err){
      return res.status(500).json(err)
    }
  }
  //get all posts
  module.exports.getAllPost = async(req,res)=>{
    const prod = await Post.find();
    return(
        res.status(200).json(prod)
    )
  }
  

  