import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import UpdateFoto from "./UpdateFoto";

const FotoItem = ({ fetchFotos, foto, setFotos, setUpdate }) => {
    const [error, setError] = useState(null)
    const [toUpdate, setToUpdate] = useState(false)
    const handleDelete = async () => {
        const { data } = await Axios.delete("http://localhost:5000/api/photos", {
            data: { id: foto._id }
        })
        fetchFotos()
        console.log(data);
    }
    const handleUpdate = async () => {
        setToUpdate(true)
    }

    return (<>
        <div className="item photo" style={{ backgroundImage: `url(http://localhost:5000/${foto.imageUrl}.jpg)` }}>

            <h2>{foto.title}</h2>
            <button className="deleteButton" onClick={handleDelete}><MdDelete /></button>
            <button className="updateButton" onClick={handleUpdate}><MdEdit /></button>

        </div>
        {toUpdate && <UpdateFoto foto={foto} setToUpdate={setToUpdate} setUpdate={setUpdate} />}
    </>
    )
}
export default FotoItem