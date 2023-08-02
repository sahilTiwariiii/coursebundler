const User=require('../models/User')
exports.postSignup=(req,res,next)=>{
    console.log("hello")
    console.log(req.body)
    // console.log(req.body.username)
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    User.create({
        username:username,
        password:password,
        email:email
    })
    .then(result=>{
        res.status(200).send({message:"user added succesfully"});
    })
    .catch(err=>{
        res.status(500).send({message:"there is some error at server side"})
    })
}