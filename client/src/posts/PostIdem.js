import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import UpdatePost from "./UpdatePost";

const PostItem = ({ fetchposts, post, setUpdate }) => {
    // const [error, setError] = useState(null)
    const [toUpdate, setToUpdate] = useState(false)
    const handleDelete = async () => {
        const { data } = await Axios.delete("http://localhost:5000/api/posts", {
            data: { id: post._id }
        })
        fetchposts()
        console.log(data);
    }
    const handleUpdate = async () => {
        setToUpdate(true)
        // const { data } = await Axios.put("http://localhost:5000/api/todos", {
        //     data: { id: post._id }
        // })
        // fetchposts()
        // console.log(data);
    }


   
    return (<>
        <div className="item post">
            <h2>{post.title}</h2>
            <p className="postBody">{post.body}</p>

            <button className="deleteButton" onClick={handleDelete}><MdDelete /></button>
            <button className="updateButton" onClick={handleUpdate}><MdEdit /></button>

        </div>
        {toUpdate && <UpdatePost post={post} setToUpdate={setToUpdate} setUpdate={setUpdate} />}
    </>
    )
}
export default PostItem