import { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa";
import PostItem from "./PostIdem"
const PostList = () => {
    const [posts, setposts] = useState([])
    const [viewPosts, setViewPosts] = useState([])

    const [update, setUpdate] = useState(false)

    const [search, setSearch] = useState("")


    const fetchposts = async () => {
        try{
        const { data } = await Axios.get('http://localhost:5000/api/posts')
        if(!data)
        setposts([])
        else
        setposts(data)
        }
        catch(error){
            console.error("Error geting data:",error)
        }
    }
    useEffect(() => {
        filterposts()
    }, [search, posts]);
    useEffect(() => {
        fetchposts();
    }, []);
    useEffect(() => {
        fetchposts();
       setUpdate(false)
    }, [update]);
    

    const filterposts = () => {
        if (search.length > 0) {
            const filterdposts = posts.filter((post) => { return post.title.indexOf(search) > -1 })
            setViewPosts(filterdposts)
        }
        else {
            setViewPosts(posts)

        }

    }
    if (viewPosts.length === 0) return <>
    <Link className="Link" to="/posts/add" ><FaPlus/> Add new post</Link>
    <h1>There is no posts yet, whode you like to add one?</h1>
    </>

    return <div className="list">
    <Link className="Link" to="/posts/add" ><FaPlus/> Add new post</Link>
        <input placeholder="search" onChange={(e) => { setSearch(e.target.value) }} />

        <div className="list posts-list">

            {viewPosts.map((post) => {
                return <PostItem fetchposts={fetchposts} post={post} setposts={setposts} setUpdate={setUpdate} />
            })}
            {/* { search!=="" && searchposts.map((post, index) => {
            return <postItem fetchposts={fetchposts} post={post} setposts={setposts} setUpdate={setUpdate}/>
            })} */}
            {/* {search !== "" && posts.filter((post) => { return post.title.indexOf(search) > -1 })} */}
        </div>
    </div>
}
export default PostList