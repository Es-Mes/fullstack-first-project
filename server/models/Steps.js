const mongoose=require("mongoose")
const StepsSchema=new mongoose.Schema(
    {

        title:{
            type:String,
            required:true
        },
        comments:String,

    },
    {timestamps:true}
)
module.exports= StepsSchema