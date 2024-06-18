
import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"


const UpdatePost = ({post,setToUpdate,setUpdate}) => {
    const[title,setTitle] = useState(post.title)
    const[body,setBody] = useState(post.body)
   
    const navigat = useNavigate()
    // const[value,setValue] = useState({
    //     title:""
    // })
    const submitForm = async (e)=>{
        e.preventDefault()
        const {data} =await Axios.put('http://localhost:5000/api/posts',{
            _id:post._id,
            title,
            body

        })
        console.log(data);
        
        setToUpdate(false)
        setUpdate(true)
        navigat('/posts')
        
    }
    return <div className="update">
    <h1>Update post {post.title}</h1>
    <h2>Update the files that you want</h2>
        <form onSubmit={submitForm}>
        <input value={title}
        placeholder={`${title}`}
        onChange={(e)=>setTitle(e.target.value)}/>
        <textarea value={body}
        placeholder={`${body}`}
        onChange={(e)=>setBody(e.target.value)}/>
        
         <button disabled={title===""} type="submit">send</button>
        </form>
       
    </div>
}
export default UpdatePost