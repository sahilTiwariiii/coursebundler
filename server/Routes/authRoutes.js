const express=require("express")
const authController=require("../controller/authController")
const Router=express.Router();
Router.post("/bn/auth/signup",authController.postSignup);
Router.post("/bn/auth/login",authController.postLogin);
Router.post('/bn/auth/reset',authController.postReset)
Router.post('/bn/auth/resetpassword',authController.newPassword)
Router.get('/bn/auth/verifytoken/:token',authController.checkToken)


module.exports=Router