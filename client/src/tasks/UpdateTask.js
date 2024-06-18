
import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const UpdateTask = ({task,setToUpdate,setTasks,setUpdate}) => {
    const[title,setTitle] = useState(task.title)
    const[status,setStatus] = useState(task.status)
    const[important,setImportant]=useState(task.important)
    const[completed,setCompleted]=useState(task.completed)
    const navigat = useNavigate()
    // const[value,setValue] = useState({
    //     title:""
    // })
    const submitForm = async (e)=>{
        e.preventDefault()
        const {data} =await Axios.put('http://localhost:5000/api/todos',{
            _id:task._id,
            title,
            status,
            completed,
            important

        })
        console.log(data);
        setToUpdate(false)
        setUpdate(true)
        navigat('/tasks')
        
    }
    return <div className="update">
    <h1>Update Task {task.title}</h1>
    <h2>Update the files thate you want</h2>
        <form onSubmit={submitForm}>
        <input value={title}
        placeholder={`${title}`}
        onChange={(e)=>setTitle(e.target.value)}/>
        <input value={status}
        placeholder={`${status}`}
        onChange={(e)=>setStatus(e.target.value)}/>
        Status options: Assigned, In Process, Completed, Closed
        <input value={important}
        placeholder={`Important: ${important}`}
        onChange={(e)=>setImportant(e.target.value)}/>
        <input value={completed}
        placeholder={`Completed: ${completed}`}
        onChange={(e)=>setCompleted(e.target.value)}/>
         <button disabled={title===""} type="submit">send</button>
        </form>
       
    </div>
}
export default UpdateTask