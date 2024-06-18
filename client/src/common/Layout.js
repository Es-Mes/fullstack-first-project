import {Outlet} from "react-router-dom"
import Navigate from "./Navigate"
const Layout=()=>{
    return(
    <div className="page">
        <header><Navigate/></header>
    <main>
    <Outlet/>
    </main>
    <footer>@ Chaya H. & Ester Leah M.</footer>
    </div>
    )
} 
export default Layout