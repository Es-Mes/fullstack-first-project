import { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa";
import FotoItem from "./FotoItem"
const FotosList = () => {
    const [fotos, setFotos] = useState([])
    const [update, setUpdate] = useState(true)

    const [search, setSearch] = useState("")
    const [viewFotos, setViewFotos] = useState([])

    const fetchFotos = async () => {
        try{
            const { data } = await Axios.get('http://localhost:5000/api/photos/')
        if(!data)
        setFotos([])
        else
        setFotos(data)
        }
        catch(error){
            console.error("Error geting data:",error)
        }
    }
    useEffect(() => {
        fetchFotos();
    }, []);
    useEffect(()=>{
        fetchFotos()
        setUpdate(false)
    },[update])
    useEffect(() => {
        filterFotos()
    }, [search, fotos]);


    const filterFotos = () => {
        if (search.length > 0) {
            const filterdFotos = fotos.filter((foto) => { return foto.title.indexOf(search) > -1 })
            setViewFotos(filterdFotos)
        }
        else {
            setViewFotos(fotos)
        }

    }
    if (fotos.length === 0) return <>
        <Link className="Link" to="/fotos/add" ><FaPlus/> Add new foto</Link>
        <h1>There is no fotos yet, whode you like to add one?</h1>
    </>


    return <div className="list">
        <Link className="Link" to="/fotos/add" ><FaPlus/> Add new foto</Link>
        <input placeholder="search" onChange={(e) => { setSearch(e.target.value) }} />
        <div className="list fotos-list">


            {viewFotos.map((foto, index) => {
                return <FotoItem fetchFotos={fetchFotos} foto={foto} setFotos={setFotos} setUpdate={setUpdate} />
            })}
            
        </div>
    </div>
}
export default FotosList