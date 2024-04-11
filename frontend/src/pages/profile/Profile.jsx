
import "./Profile.css";
import Feed from "../../components/feed/Feed";

import NavbarProfil from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';



import Col from "react-bootstrap/esm/Col"
import Row from 'react-bootstrap/Row';
import Siderbar from "../../components/Siderbar/Siderbar";
import Rightbar from "../../components/rightbar/Rightbar";

import Getpostbyid from "../../components/posts/getpostById/GetpostByid";
import Rightbutton from "../../components/rightbar/Rightbutton";

 const  Profile=()=> {
    
    const token = localStorage.getItem('token');
    console.log(token)
    const decodedToken = jwtDecode(token);
    console.log(decodedToken)
    const id = decodedToken._id;
   
    const[getprofile,setgetprofile]=useState('')

     useEffect(()=>{
      axios.get("http://localhost:8888/users/"+id)
       .then((resp)=>{setgetprofile(resp.data)})
       .catch((err)=>{console.log(err)})
       },[])
  
     console.log(getprofile)

   
     return (
    <>
       <NavbarProfil/>
       <Row>
       <Col ms={2}>
            <Siderbar/>
            <div className="prof">
            <h2 className="name"> Profil User</h2>
            <img  src={getprofile.profilePicture} className="photo" />
        
      <h3 className="desc">Name:{getprofile.username}</h3>
      <h3 className="desc">ID: {getprofile._id}</h3>
      <h3 className="desc">Birthdate: {getprofile.birthdate}</h3>
      <h3 className="desc">Bio: {getprofile.desc}</h3>

      
       <Link to="/home">Back Home</Link>

     </div>
             </Col>
             <Col ms={8}>
             <Feed/>
            
      
     <Getpostbyid/>
             </Col>
             <Col ms={2}>
                 <Rightbar/> 
                 <br></br>
                 <Rightbutton/>
                
             </Col>
       </Row>
      
      
    </>
  );
 }
 export default Profile






