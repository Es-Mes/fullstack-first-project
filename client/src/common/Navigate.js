import { NavLink } from "react-router-dom"


const Navigate=()=>{
return <div className="nav">
<NavLink to='/'>Home page</NavLink>
<NavLink to='/tasks'>Tasks list</NavLink>
<NavLink to='/posts'>Posts list</NavLink>
<NavLink to='/fotos'>Fotos list</NavLink>
<NavLink to='/users'>Users list</NavLink>

{/* <NavLink to='/tasks/add'>Add new task</NavLink> */}
</div>
}
export default Navigate