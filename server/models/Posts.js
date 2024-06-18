const mongoose=require('mongoose')
const postsSchema=new mongoose.Schema(
    {

        title:{
            type:String
        },
        body:{
            type:String,
            maxLength:700
        }

    },
    {timestamps:true}
)
module.exports=mongoose.model('Posts',postsSchema)