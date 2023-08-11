const User=require('../models/User')
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')
const secretKey = 'your_secret_key';
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const pass=process.env.pass

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'internbambhari@gmail.com',
      pass: 'wvzmrxuuinkdzsdc'
    },
    tls:{
        //transport layer security
      rejectUnauthorized:false
    },
    port: 465,
    host: 'smtp.gmail.com'//hostname
    //simple mail transfer protocol server used by gmail to provide email facility
    }
  );
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
                    
                    const token = jwt.sign({email:user.email,username:user.username }, secretKey,{ expiresIn: '24h' });

                    res.status(200).send({message:'login succesfully',token:token})

                }
                else{
                    res.status(400).send({message:'password does not match'})
                }
            })
        }
    })
}
exports.postReset = (req, res, next) => {
    crypto.randomBytes(32, (err, buffer) => {
        console.log("khuban")
      if (err) {
        console.log(err);
        res.status(500).send({message:'Error occured'})
      }
      const token = buffer.toString('hex');
      User.findOne({ email: req.body.email })
        .then(user => {
          if (!user) {
            res.status(400).send({message:"user not found"})
          }
          user.resetToken = token;
          user.resetTokenExpiration = Date.now() + 3600000;
           user.save();
        })
        .then(result => {
            transporter.sendMail({
                to: req.body.email,
                from: 'internbambhari@gmail.com',
                subject: 'Password reset',
                html: `
                      <p>You requested a password reset</p>
                      <p>Click this <a href="http://localhost:8080/reset/${token}">link</a> to set a new password.</p>
                    `
              }).then(ress=>{
                res.status(200).send({message:"successfull-Check your email"})
              })
          
          
        })
        .catch(err => {
            console.log(err);
        });
    });
  }
  