const express= require("express");
const app=express();
const authRoutes=require('./Routes/authRoutes')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(authRoutes)

mongoose.connect("mongodb+srv://Khubanzehra:squarepants%4020@cluster0.wm0iy3i.mongodb.net/brainNex").then(res=>{
    app.listen(8080,()=>{
        console.log("server running")
        console.log("db connected")
    });
})
.catch(err=>{
    console.log(err)
})
