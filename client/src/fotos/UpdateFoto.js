
import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"


const UpdateFoto = ({foto,setToUpdate,setUpdate}) => {
    const[title,setTitle] = useState(foto.title)
    const[imageUrl,setBody] = useState(foto.imageUrl)
   
    const navigat = useNavigate()
    const submitForm = async (e)=>{
        e.preventDefault()
        const {data} =await Axios.put('http://localhost:5000/api/photos/',{
            _id:foto._id,
            title,
            imageUrl

        })
        console.log(data);
        
        setToUpdate(false)
        setUpdate(true)
        navigat('/fotos')
        
    }
    return <div className="update">
    <h1>Update Foto {foto.title}</h1>
    <h2>Update the files that you want</h2>
        <form onSubmit={submitForm}>
        <input value={title}
        placeholder={`${title}`}
        onChange={(e)=>setTitle(e.target.value)}/>
        <input value={imageUrl}
        placeholder={`${imageUrl}`}
        onChange={(e)=>setBody(e.target.value)}/>
        
         <button disabled={title===""} type="submit">send</button>
        </form>
       
    </div>
}
export default UpdateFoto