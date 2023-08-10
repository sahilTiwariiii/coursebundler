const express= require("express");
const cors = require('cors');
const app=express();
require('dotenv').config()
const authRoutes=require('./Routes/authRoutes')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
app.use(cors({
    origin: 'http://localhost:3000', 
  }));
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(authRoutes)

mongoose.connect(process.env.MONGODB_URL).then(res=>{
    app.listen(8080,()=>{
        console.log("server running")
        console.log("db connected")
    });
})
.catch(err=>{
    console.log(err)
})
