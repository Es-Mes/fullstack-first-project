import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import { TiDeleteOutline } from "react-icons/ti";

import UpdateTask from "./UpdateTask";

const TaskItem = ({ fetchTasks, task, setTasks, setUpdate }) => {
    const [error, setError] = useState(null)
    const [toUpdate, setToUpdate] = useState(false)
    const handleDelete = async () => {
        const { data } = await Axios.delete("http://localhost:5000/api/todos", {
            data: { id: task._id }
        })
        fetchTasks()
        console.log(data);
    }
    const handleUpdate = async () => {
        setToUpdate(true)
        
    }
    const handleUpdateComplete = async () => {
        try {
            const { data } = await Axios.put("http://localhost:5000/api/todos/complete",
                { id: task._id }
            )
            fetchTasks()
            console.log(data);
        }
        catch (error) {
            setError(error);
            console.log(error);
        }
    }

    return (<>
        <div className="item task">
            <h2 className="title">{task.title}</h2>
            <h3>{task.status}</h3>
            <button className="deleteButton" onClick={handleDelete}><MdDelete /></button>
            <button className="updateButton" onClick={handleUpdate}><MdEdit /></button>
            <button className="completedButton" style={{ background: task.completed ? "rgba(188, 66, 107, 0.708)" : " rgba(62, 53, 53, 0.753)" }} 
            onClick={handleUpdateComplete}> {task.completed ? <MdCheck /> :<TiDeleteOutline />}completed</button>

        </div>
        {toUpdate && <UpdateTask task={task} setToUpdate={setToUpdate} setTasks={setTasks} setUpdate={setUpdate} />}
    </>
    )
}
export default TaskItem