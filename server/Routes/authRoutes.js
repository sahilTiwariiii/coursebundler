const express=require("express")
const authController=require("../controller/authController")
const Router=express.Router();
Router.post("/bn/auth/signup",authController.postSignup);
Router.post("/bn/auth/login",authController.postLogin);
Router.post('/bn/auth/reset',authController.postReset)

module.exports=Router