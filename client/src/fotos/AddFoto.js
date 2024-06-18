import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const AddFoto = () => {
    const[title,setTitle] = useState()
    const[imageUrl,setImageUrl] = useState()
    const navigat = useNavigate()
    
    const submitForm = async (e)=>{
        e.preventDefault()
        const {data} =await Axios.post('http://localhost:5000/api/photos',{title,imageUrl})
        setTitle("")
        console.log(data);
        navigat('/fotos')
    }
    return <>
    
        <form className="add" onSubmit={submitForm}>
        <h1>Add Photo</h1>
        <input value={title}
        placeholder="Please add title"
        required={true}
        onChange={(e)=>setTitle(e.target.value)}/>
        <input value={imageUrl}
        placeholder="Please add imageUrl"
        onChange={(e)=>setImageUrl(e.target.value)}/>
        
         <button disabled={title===""} type="submit">send</button>
        </form>
       
    </>
}
export default AddFoto