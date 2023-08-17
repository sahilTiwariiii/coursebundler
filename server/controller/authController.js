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
exports.postReset = async (req, res) => {
  try {
      const email = req.body.email;
      // console.log(req.body);
      const user = await User.findOne({ email: email });

      if (user) {
          await crypto.randomBytes(32, async (err, buffer) => {
              if (err) {
                  // console.log(err);
                  return res.status(500).send({
                      message: 'Internal server error occurred while generating token',
                      invalid: true
                  });
              }

              const token = await buffer.toString('hex');

              try {
                user.resetToken = token;
                  user.resetTokenExpiration = Date.now() + 300000;

                  await user.save();

                  res.status(200).send({ message: 'Email sent successfully', invalid: false });
                  await transporter.sendMail({
                      from: "internbambhari@gmail.com",
                      to: email,
                      subject: 'Reset Password',
                      html: `
            <h1>You requested a password reset</h1>
            <h3>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</h3>
          `
                  });
                  
              } catch (error) {
                  // console.log(error);
                  res
                      .status(500)
                      .send({ message: 'Internal server error occurred while sending email', invalid: true });
              }
          });
      } else {
          res.status(200).send({
              message: 'No user with this email present in the database. Please enter the correct email.',
              invalid: true
          });
      }
  } catch (error) {
      // console.log(error);
      res.status(500).send({ message: 'Internal server error occurred while resetting password' });
  }
};
  exports.newPassword = (req, res, next) => {
    const newPassword = req.body.password;
    const token = req.body.token;
    console.log(newPassword,token)
    let resetUser;
    User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    })
      .then(user => {
        resetUser = user;
        return bcrypt.hash(newPassword, 12);
      })
      .then(hashedPassword => {
        resetUser.password = hashedPassword;
        resetUser.resetToken = undefined;
        resetUser.resetTokenExpiration = undefined;
        return resetUser.save();
      })
      .then(result => {
        res.status(200).send({message:'password updated'})
      })
      .catch(err => {
        res.status(5000).send({message:'some error occured'})
      });
  };
  exports.checkToken=async(req,res,next)=>{
    const token=req.params.token
    console.log(token)
    const user=await User.findOne({resetToken:token,resetTokenExpiration:{$gt:Date.now()}})
    if(user){
      res.status(200).send({isValid:true})
    }
    else{
      res.status(200).send({isValid:false})
    }
  }