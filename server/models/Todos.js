const mongoose=require('mongoose')
const StepsSchema  =require('./Steps')

const todosSchema=new mongoose.Schema(
  
    {

        title:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:["Assigned","In Process","Completed","Closed"],
            default:"Assigned"
        },
        completed:{
            type:Boolean,
            default:false
        },
        important: { 
            type:Boolean,
         },
         grade:{
            type:Number
         },
         tags:{
            type:[String]
        },
        date:{
          type:Date  
        },
        location:{
            street:String,
            city:String,
            building:String
        },
        icon:{
            type:String
        },
        // user:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     required:true,
        //     ref:"Users"
        // },
        // steps:[StepsSchema]
        

    },
    {timestamps:true}
)
module.exports=mongoose.model('Todos',todosSchema)