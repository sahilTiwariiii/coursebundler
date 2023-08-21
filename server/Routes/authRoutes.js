const express=require("express")
const authController=require("../controller/authController")
const Router=express.Router();
Router.post("/bn/auth/signup",authController.postSignup);
Router.post("/bn/auth/login",authController.postLogin);
module.exports=Router
// const express = require('express');
const router = express.Router();

router.get('/api/videos', (req, res) => {
    // Handle fetching video URLs and send the response
    // Example: You might retrieve video URLs from a database or storage
    const videoUrls = ['video_url_1.mp4', 'video_url_2.mp4'];
    res.json(videoUrls);
  });
  
  // ... Other route definitions ...
  
  module.exports = router;