import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import UpdateUser from "./UpdateUser";

const UserItem = ({ fetchUsers,user,setUsers,setUpdate}) => {
    const [error, setError] = useState(null)
    const [toUpdate,setToUpdate] = useState(false)
    const handleDelete = async () => {
        const { data } = await Axios.delete("http://localhost:5000/api/users", {
            data: { id: user._id }
        })
        fetchUsers()
        console.log(data);
    }
    const handleUpdate = async () => {
        setToUpdate(true)
    }
    
    return (
        <>
        <div className="item user">
            <h4>`id: {user._id}`</h4>
            <h2>{user.userName}</h2>
            <h3>{user.email}</h3>
            <h3>{user.address}</h3>
            <button className="deleteButton" onClick={handleDelete}><MdDelete /></button>
            <button className="updateButton" onClick={handleUpdate}><MdEdit /></button>
        </div>
        {toUpdate && <UpdateUser user={user} setToUpdate={setToUpdate} setUsers={setUsers} setUpdate={setUpdate}/>}
        </>
    )
}
export default UserItem