import { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa";

import UserItem from "./UserItem"
const UsersList = () => {
    const [users, setUsers] = useState([])
    const [update, setUpdate] = useState(false)

    const [search, setSearch] = useState("")
    const [viewUsers, setViewUsers] = useState([])

    const fetchUsers = async () => {
     try{
        const { data } = await Axios.get('http://localhost:5000/api/users/')
    //     if(!data)
    //     setUsers([])
    // else
        console.log(data);
        const sortedUsers = data.sort((a, b) => b._id - a._id);
        setUsers(sortedUsers)
    }
    catch(error){
        console.error("Error geting data:",error)
    }
    }

    const filterUsers = () => {
        if (search.length > 0) {
            const filterdUsers = users.filter((user) => { return user.userName.indexOf(search) > -1 })
            setViewUsers(filterdUsers)
        }
        else{
            setViewUsers(users)
        }  
    }
    // const sortUsers = () => {
    //     const sortedData = users.sort((a, b) =>  b._id - a._id);
    //     setUsers([...sortedData])
    // }
    useEffect(() => {
        filterUsers()
     }, [search,users]);
    useEffect(() => {
        fetchUsers();
    }, []);
    useEffect(() => {
        fetchUsers();
        // sortUsers();
       setUpdate(false)
    }, [update]);
    

   




    if (viewUsers.length === 0) return <>
    <Link className="Link" to="/users/add" ><FaPlus/> Add new user </Link>
    <h1>There is no users yet, whode you like to be the first one?</h1>
    </>


    return <>

        <div className="list users-list">
            <Link className="Link" to="/users/add" ><FaPlus/> Add new user </Link>
            <input  placeholder="search" onChange={(e) => { setSearch(e.target.value) }} />

            { viewUsers.map((user, index) => {
                return <UserItem fetchUsers={fetchUsers} user={user} setUsers={setUsers} setUpdate={setUpdate} />
            })}
           
        </div>
    </>
}
export default UsersList