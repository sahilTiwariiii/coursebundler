const User=require('../models/User')

const jwt=require('jsonwebtoken')
const secretKey = 'your_secret_key';


exports.updateProfile=(req,res,next)=>{

    const username=req.body.username
    const linkedinUrl=req.body.linkedinUrl
    const twitterUrl=req.body.twitterUrl
    const email="ewdb"
    User.findOne({email:email}).then(user=>{
        if(!user){
            return;
        }
        user.username=username
        user.twitterUrl=twitterUrl
        user.linkedinUrl=linkedinUrl
        return user.save()

    }).then(res=>{
        res.status(200).send({message:'user updated'})
    }).catch(err=>{
        res.status(500).send({message:'some error occured at server side'})
    })

  }