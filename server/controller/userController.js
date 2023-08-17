const User=require('../models/User')

const jwt=require('jsonwebtoken')
const secretKey = 'your_secret_key';


exports.updateProfile=(req,res,next)=>{

    const username=req.body.username
    const linkedinUrl=req.body.linkedinUrl
    const twitterUrl=req.body.twitterUrl
    const email=req.body.email
    console.log(linkedinUrl,twitterUrl,email,username)
    User.findOne({email:email}).then(user=>{
        if(!user){
            return;
        }
        user.username=username
        user.twitterUrl=twitterUrl
        user.linkedUrl=linkedinUrl
        console.log(user)
        return user.save()

    }).then(res=>{
        res.status(200).send({message:'user updated'})
    }).catch(err=>{
        res.status(500).send({message:'some error occured at server side'})
    })

  }
  exports.getUser=(req,res,next)=>{
    const email=req.params.email
    User.findOne({email:email}).then(user=>{
        res.status(200).send({data:user})
    }).catch(err=>{
        res.status(500).send({message:'some error occured'})
    })
  }