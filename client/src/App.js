import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TaskList from './tasks/TaskList'
import AddTask from './tasks/AddTask'
import Layout from './common/Layout';
import PostList from './posts/PostList';
import FotosList from './fotos/FotosList';
import UsersList from './users/UsersList';
import AddPost from './posts/AddPost';
import AddUser from './users/AddUser';
import AddFoto from './fotos/AddFoto';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<div className='homePage'><h1>Home Page</h1>
         <h1>Welcome to the "Your Personal Area" website</h1>
         <h2> We wish you enjoyment and efficient use!</h2></div>}/>
            <Route path='/tasks' element={<TaskList />} />
            <Route path='/tasks/add' element={<AddTask />} />
           
            <Route path='/posts' element={<PostList />} />
            <Route path='/posts/add' element={<AddPost />} />

            <Route path='/fotos' element={<FotosList />} />
            <Route path='/fotos/add' element={<AddFoto />} />

            <Route path='/users' element={<UsersList />} />
            <Route path='/users/add' element={<AddUser />} />


            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
