const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String, require:true},
    profilePicture: {
        type: String,
        default: "",
    },
     
     
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive : {
        type: Boolean, 
        default:true
    },
    desc: {
        type: String,
        max: 50,
    },
      
      birthdate:{type:Date},
},{timestamps:true,versionKey:false}
)

module.exports= mongoose.model("user",userSchema);