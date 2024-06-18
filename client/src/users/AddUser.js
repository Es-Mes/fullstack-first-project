import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const AddUser = () => {
    const[userName,setUserName] = useState()
    const[password,setPassword]=useState()
    const[email,setEmail] = useState()
    const[adress,setAdress]=useState()
    const[phone,setPhone]=useState()
    const navigat = useNavigate()

    const submitForm = async (e)=>{
        e.preventDefault()
        const {data} =await Axios.post('http://localhost:5000/api/users',{userName,password,email,adress,phone})
        setUserName("")
        console.log(data);
        navigat('/users')
    }
    return <>
   
        <form className="add" onSubmit={submitForm}>
         <h1>Add User</h1>
         <h3>Name</h3>
        <input value={userName}
        onChange={(e)=>setUserName(e.target.value)}/>
        <h3>User name</h3>
         <input value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <h3>Email</h3>
        <input value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <h3>Adress</h3>
        <input value={adress}
        onChange={(e)=>setAdress(e.target.value)}/>
        <h3>Phone</h3>
        <input value={phone}
        onChange={(e)=>setPhone(e.target.value)}/>
         <button disabled={userName===""} type="submit">send</button>
        </form>
       
    </>
}
export default AddUser