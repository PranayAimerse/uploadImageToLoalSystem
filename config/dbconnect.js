const mongoose=require("mongoose")
require("dotenv").config()
exports. dbconnect=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
           console.log("DATABASE conneciton sucessfull")
    }).catch((err)=>{
        console.log("errro in datbase connection")
        console.log(err)
    })
}