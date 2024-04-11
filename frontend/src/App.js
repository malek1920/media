import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Forgot from './pages/forgot/Forgot';
import Profile from './pages/profile/Profile';
import Friends from './pages/friends/Friends';
import EditUser from './components/users/editUser/EditUser';
import Logout from './pages/logout/logout';


function App() {
  return (
   <>
    <BrowserRouter>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/profil" element={<Profile/>}/>
      <Route path="/edit/:id" element={<EditUser/>}/> 
      <Route path="/users" element={<Friends/>}/>
      
      <Route path="*" element={<PageNotFound/>}/>
    
      </Routes>
     </BrowserRouter>
     
   </>
  );
}

export default App;