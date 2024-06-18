const Todos= require ("../models/Todos")
const Steps = require('../models/Steps')
const createNewTodo = async (req,res)=>{
//create
 const{title,status,tags,completed,important,grade,date,location,icon,user} = req.body
if(!title){
    res.json('field "title" is required')

}
const Estatus =["Assigned","In Process","Completed","Closed"]
const s = Estatus.find((s)=>{s===status})

if(status&&!s){
    res.json('Input valid data in status:"Assigned","In Process","Completed" or "Closed"')
}
else{
 const todo = await Todos.create({title,status,tags,completed,important,grade,date,location,icon,user})
 res.json(todo)
}
}
//read
const getAllTodos = async (req,res)=>{
    const todos = await Todos.find().lean()
    // if(!todos?.length){
    //     return res.json({massage:'No todos Found'})
    // }
    res.json(todos)
}
//update המעודכן יותר משיעורי הבית
// const updateTodo = async (req,res)=>{
//     const {_id,title,status,tags,completed,important,grade,date,location,icon,user}=req.body
//     
//     if(!_id||!title||!user){
//     return res.status(400).json({massage:'_id, title and user are required for updating'})
//     }
//     // -------to chack--------
//     const todo = await Todos.findById(_id).exec()
//     if(!todo){
//         return res.status(400).json({message:'todo not found'})
//     }
//     else{
//     todo.title=title
//     todo.status=status
//     todo.important=important
//     todo.grade=grade
//     todo.tags=tags
//     todo.date=date
//     todo.location=location
//     todo.icon=icon
//     todo.user=user
//     todo.completed=completed
//     const updateTodo = await todo.save()
//     res.json(`'${updateTodo.title}' updated`)
// }
// }
//update
const updateTodo = async (req,res)=>{
    const {_id,title,status,tags,completed,important,grade,date,location,icon}=req.body
    // ,user
    
    // -------to chack--------
    const todo = await Todos.findById(_id).exec()
    if(!todo){
        return res.status(400).json({message:'todo not found'})
    }
    else{
    todo.title=title
    todo.status=status
    todo.important=important
    todo.grade=grade
    todo.tags=tags
    todo.date=date
    todo.location=location
    todo.icon=icon
    // todo.user=user
    todo.completed=completed
    const updateTodo = await todo.save()
    res.json(`'${updateTodo.title}' updated`)
}
}

// updateTodoStep
const updateTodoStep = async (req,res)=>{
    const {id} = req.params
    const{title,comments}=req.body
    const todo = await Todos.findById(id).exec()
    if(!title){
        res.json('Title of step is required')
    }
    if(!todo){
      return res.json('Step not found')
    }
    else{
        const newStepsArr = [...todo.steps,{title:title,comments:comments}]
        todo.steps = newStepsArr
        const updateTodo = await todo.save()
        res.json(`${updateTodo.title} steps updated`)
        
    }
}
//delete
//----------chack-------------
const deleateTodo = async (req,res)=>{
    const {id} = req.body
    const todo = await Todos.findById(id).exec()
    if(!todo) {
        return res.status(400).json({message:'todo not found'})
    }
    // const todo2 = todo
    const result = await todo.deleteOne()
    const replay=`todo ${todo.title}, ID ${todo._id} deleted` 
    res.json(replay)
}
const getTodoById = async(req,res)=>{
    const {id} = req.params
    const todo = await Todos.findById(id).lean()
    if(!todo){
        return res.status(400).json({message:'todo not found'})
    }
    res.json(todo)

}
const updateTodoComplete = async (req,res)=>{
    const {id} = req.body
    const todo = await Todos.findById(id).exec()
    if(!todo){
        return res.status(400).json({message:'todo not found'})
    }
    todo.completed = !todo.completed
    const updateTodo = await todo.save()
    res.json(`${updateTodo.title} updated`)
}
module.exports = {createNewTodo,getAllTodos,updateTodo,deleateTodo,getTodoById,updateTodoComplete,updateTodoStep}