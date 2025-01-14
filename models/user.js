const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    name:{
        type:String
    },
    imgae_url:{
        type:String
    }
})

module.exports=mongoose.model("User",userschema)