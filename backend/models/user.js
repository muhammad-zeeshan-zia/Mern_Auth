const mongoose =require('mongoose');

const User_Schema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:"",
    },
    about :{
        type:String,
        default:""
    }
  
},  {
    timestamps:true
})

module.exports=mongoose.model("User",User_Schema);
