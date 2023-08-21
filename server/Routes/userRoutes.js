const express=require("express")
const userController=require("../controller/userController")
const Router=express.Router();
Router.post("/bn/user/updateprofile",userController.updateProfile);
Router.get("/bn/user/getuser/:email",userController.getUser);


module.exports=Router