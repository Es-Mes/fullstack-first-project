import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const AddTask = () => {
    const[title,setTitle] = useState()
    const[status,setStatus] = useState()
    const[important,setImportant]=useState()
    const navigat = useNavigate()
    // const[value,setValue] = useState({
    //     title:""
    // })
    const submitForm = async (e)=>{
        e.preventDefault()
        const {data} =await Axios.post('http://localhost:5000/api/todos',{title,status,important})
        setTitle("")
        console.log(data);
        navigat('/tasks')
    }
    return <>
   
        <form className="add" onSubmit={submitForm}>
         <h1>Add Task</h1>
         <input value={title}
        placeholder="Please add title"
        required={true}
        onChange={(e)=>setTitle(e.target.value)}/>
        <input value={status}
        placeholder="Please add status"
        onChange={(e)=>setStatus(e.target.value)}/>
        Status options: Assigned, In Process, Completed, Closed
        <input value={important}
        placeholder="Set important: true/false"
        onChange={(e)=>setImportant(e.target.value)}/>
         <button disabled={title===""} type="submit">send</button>
        </form>
       
    </>
}
export default AddTask