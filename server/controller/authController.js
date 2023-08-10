const User=require('../models/User')
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')
const secretKey = 'your_secret_key';
exports.postSignup=(req,res,next)=>{
   
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    User.findOne({email:email}).then(user=>{
        if(user){
            res.status(400).send({message:"User already exists"})
        }
        else{
            bcrypt.hash(password,12)
            .then(hashedpassword=>{
                console.log(hashedpassword)
                User.create({
                    username:username,
                    password:hashedpassword,
                    email:email
                })
                .then(result=>{
                    res.status(200).send({message:"user added succesfully"});
                })
                .catch(err=>{
                    res.status(500).send({message:"there is some error at server side"})
                })
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })
    
}

exports.postLogin=(req,res,next)=>{
    const email=req.body.email
    const password=req.body.password
    User.findOne({email:email})
    .then(user=>{
        if(!user){
            res.status(400).send({message:"User not found"})
        }
        else{
            bcrypt.compare(password,user.password)
            .then(Match=>{
                if(Match){
                    
                    const token = jwt.sign({email:user.email }, secretKey,{ expiresIn: '24h' });

                    res.status(200).send({message:'login succesfully',token:token})

                }
                else{
                    res.status(400).send({message:'password does not match'})
                }
            })
        }
    })
}