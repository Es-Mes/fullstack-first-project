import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const AddPost = () => {
    const[title,setTitle] = useState()
    const[body,setBody] = useState()
    const navigat = useNavigate()
    // const[value,setValue] = useState({
    //     title:""
    // })
    const submitForm = async (e)=>{
        e.preventDefault()
        const {data} =await Axios.post('http://localhost:5000/api/posts',{title,body})
        setTitle("")
        console.log(data);
        navigat('/posts')
    }
    return <>
   
        <form className="add" onSubmit={submitForm}>
         <h1>Add Post</h1>
         <input value={title}
        placeholder="Please add title"
        required={true}
        onChange={(e)=>setTitle(e.target.value)}/>
        <textarea value={body}
        placeholder="Please add Body"
        onChange={(e)=>setBody(e.target.value)}/>
        
         <button disabled={title===""} type="submit">send</button>
        </form>
       
    </>
}
export default AddPost