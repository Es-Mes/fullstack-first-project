
import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const UpdateUser = ({user,setToUpdate,setUsers,setUpdate}) => {
    const[userName,setUserName] = useState(user.userName)
    const[password,setPassword]=useState(user.password)
    const[email,setEmail] = useState(user.email)
    const[adress,setAdress]=useState(user.address)
    const[phone,setPhone]=useState(user.phone)
    const navigat = useNavigate()
    // const[value,setValue] = useState({
    //     userName:""
    // })
    const submitForm = async (e)=>{
        e.preventDefault()
        const {data} =await Axios.put('http://localhost:5000/api/users',{
            _id:user._id,
            userName,
            password,
            email,
            adress,
            phone

        })
        console.log(data);
        
        setToUpdate(false)
        setUpdate(true)
        navigat('/users')
        
    }
    return <div className="update">
    <h1>Update User {user.userName}</h1>
    <h2>Update the files thate you want</h2>
        <form onSubmit={submitForm}>
        <h3>Name</h3>
        <input value={userName}
        placeholder={`${userName}`}
        onChange={(e)=>setUserName(e.target.value)}/>
        <h3>User name</h3>
         <input value={password}
        placeholder={`${password}`}
        onChange={(e)=>setPassword(e.target.value)}/>
        <h3>Email</h3>
        <input value={email}
        placeholder={`${email}`}
        onChange={(e)=>setEmail(e.target.value)}/>
        <h3>Adress</h3>
        <input value={adress}
        placeholder={`${adress}`}
        onChange={(e)=>setAdress(e.target.value)}/>
        <h3>Phone</h3>
        <input value={phone}
        placeholder={`${phone}`}
        onChange={(e)=>setPhone(e.target.value)}/>
         <button disabled={userName===""} type="submit">send</button>
        </form>
       
    </div>
}
export default UpdateUser