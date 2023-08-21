<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
=======
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
>>>>>>> 046c8b149f560bb891afe5992c2762f3b9a4d385

const app = express();

app.use(cors());

const mediaRoutes = require("./routes/media");

app.use("/api/v1/media", mediaRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));

const mongodbUri = "mongodb://localhost:27017/uploadproject";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb...");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});

app.listen(8080, () => {
  console.log("App is running on PORT 8080");
});
