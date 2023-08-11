const express= require("express");
const cors = require('cors');
const app=express();
require('dotenv').config()
const authRoutes=require('./Routes/authRoutes')
const userRoutes=require('./Routes/userRoutes')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const multer=require("multer");
const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        //errror,directory
        cb(null,"uploadedimage")
    },
    filename:(req,file,cb)=>{
        // console.log(file.originalname)
        cb(null,new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname)//file is an object and datenow we are adding with file anme to prevent any redundancy
        
    }
})
app.use(multer({storage:fileStorage}).single("image"))



app.use(cors({
    origin: 'http://localhost:3000', 
  }));
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(authRoutes)
app.use(userRoutes)

mongoose.connect(process.env.MONGODB_URL).then(res=>{
    app.listen(8080,()=>{
        console.log("server running")
        console.log("db connected")
    });
})
.catch(err=>{
    console.log(err)
})
