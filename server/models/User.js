const mongoose=require('mongoose')
const userSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        twitterUrl:String,
        linkedUrl:String,
        resetToken: String,
        resetTokenExpiration: Date
    }
)

module.exports=mongoose.model("User",userSchema)