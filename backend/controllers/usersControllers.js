const User = require("../model/user");
const bcrypt = require('bcryptjs')


//update user
module.exports.updateUser= async (req, res) => {
 try {     
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
        password : await bcrypt.hash(req.body.password, 10),
       });
      res.status(200).json("Account has been updated");
    
    } catch (err) {
      return res.status(500).json(err);
    }
}

//delete user
module.exports.deleteUser= async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }

}

//get a user

module.exports.getUser =async (req,res)=>{
   const {id} = req.params
   const prod = await User.findById(id)
   return(
       res.status(200).json(prod)
   )
 }

//get all

module.exports.getAllUsers = async(req,res)=>{
  const prod = await User.find();
  return(
      res.status(200).json(prod)
  )
}



 



