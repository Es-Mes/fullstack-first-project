const mongoose=require('mongoose')
const usersSchema=new mongoose.Schema(
    {
        
        userName:{
            type:String,
            lowercase:true,
            required:true,
            index:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            lowercase:true,
            trim:true
        },
        address:{
            type:String
        },
        phone:{
            type:Number
        },
        roles:{
            type:String,
            enum:["Admin","User","Guest"],
            default:"User"
        },
        active:{
            type:Boolean,
            default:true,
        }

    },
    {timestamps:true}
)
module.exports=mongoose.model('Users',usersSchema)
