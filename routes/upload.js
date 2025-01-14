const express=require("express")
const { imageupload } = require("../controllers/usercontrolellermultipleimages")

const router=express.Router()

router.post("/addphoto",imageupload)


module.exports={router}