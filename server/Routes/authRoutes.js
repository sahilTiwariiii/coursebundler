const express=require("express")
const authController=require("../controller/authController")
const Router=express.Router();
Router.post("/bn/auth/signup",authController.postSignup);
module.exports=Router