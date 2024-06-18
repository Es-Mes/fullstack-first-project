import { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa";

import TaskItem from "./TaskItem"
const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [update, setUpdate] = useState(false)

    const [search, setSearch] = useState("")
    const [viewTasks, setViewTasks] = useState([])

    const fetchTasks = async () => {
        try{const { data } = await Axios.get('http://localhost:5000/api/todos/')
        if(!data)
        setTasks([])
        else
        setTasks(data)}
        catch(error){
            console.error("Error geting data:",error)
        }
    }
    useEffect(() => {
        fetchTasks();
    }, []);
    useEffect(() => {
        fetchTasks();
       setUpdate(false)
    }, [update]);
    useEffect(() => {
       filterTasks()
    }, [search,tasks]);

   
    const filterTasks = () => {
        if (search.length > 0) {
            const filterdTasks = tasks.filter((task) => { return task.title.indexOf(search) > -1 })
            setViewTasks(filterdTasks)
        }
        else{
            setViewTasks(tasks)
        }
        
    }
    if (viewTasks.length === 0)
    {console.log("no tasks");}
    if (viewTasks.length === 0) return <>
   
    <Link className="Link" to="/tasks/add" ><FaPlus/> Add new task</Link>
    <h1>There is no tasks yet, whode you like to add one?</h1>
    </>

    return <>

        <div className="list tasks-list">
        <Link className="Link" to="/tasks/add" ><FaPlus/> Add new task</Link>
            <input  placeholder="search" onChange={(e) => { setSearch(e.target.value) }} />

            { viewTasks.map((task, index) => {
                return <TaskItem fetchTasks={fetchTasks} task={task} setTasks={setTasks} setUpdate={setUpdate} />
            })}
            {/* { search!=="" && searchTasks.map((task, index) => {
            return <TaskItem fetchTasks={fetchTasks} task={task} setTasks={setTasks} setUpdate={setUpdate}/>
            })} */}
            {/* {search !== "" && tasks.filter((task) => { return task.title.indexOf(search) > -1 })} */}
        </div>
    </>
}
export default TaskList