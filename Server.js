const express=require("express")
const cors=require("cors")
const fileupload=require("express-fileupload")
const { dbconnect } = require("./config/dbconnect")
const { router } = require("./routes/upload")
const path = require('path');
const app=express()
app.use(cors())
const PORT=7000
app.use(fileupload())
app.use(express.json())
app.use('/assets/', express.static(path.join(__dirname, '/assets/')));
app.use('/api/v1',router)
app.use(fileupload())
dbconnect()
app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`)
})
