const User = require("../model/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


module.exports.register = (req,res)=>{
const {username,email,password,birthdate,profilePicture,isAdmin,isActive,desc} = req.body
const newuser = new User({
    username,
    email,
    password: bcrypt.hashSync(password, 10),
    birthdate,isAdmin,profilePicture,isActive,desc
    });

newuser.save()
       .then(()=>{
        return res.status(200).json({message:"welcom new user"})
    })
        .catch((err)=>{
        return res.status(400).json({message:err.message})
    })
}

module.exports.login = async(req,res)=>{
const {email,password} = req.body
            
const theuser = await User.findOne({email})
           
if(theuser !== null) {
    if(theuser.isActive === false) {
    return res.status(401).json({ error: "You can't login ! You are disabled ! "}); 
    }else if (bcrypt.compareSync(password, theuser.password)) {
    const token = jwt.sign({_id:theuser._id},"project")
    return res.status(200).json(token);
    }else{
    return res.status(400).json({message: "worng password!"});
    }
    }
    else{
    return res.status(400).json({message:'user not found'})
    }
    };

module.exports.forgetPassword = async(req,res)=>{
const {email} = req.body
const theuser = await User.findOne({email})
if(theuser!== null) {
const token = jwt.sign({_id:theuser._id},"project")
                    
return res.status(200).json({message:'please check your email for reset your password'})   
}
else{
return res.status(400).json({message: "worng password!"});
}
 } 

 