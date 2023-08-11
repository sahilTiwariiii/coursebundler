const express=require("express")
const userController=require("../controller/userController")
const Router=express.Router();
Router.post("/bn/user/updateprofile",userController.updateProfile);


module.exports=Router