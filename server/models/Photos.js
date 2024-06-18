const mongoose=require('mongoose')
const photosSchema=new mongoose.Schema(
    {
        title:{
            type:String
        },
        imageUrl:{
            type:String,
            default:""
        }
    },
    {timestamps:true}
)
module.exports=mongoose.model('Photos',photosSchema)