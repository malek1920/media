import "./Home.css"
import Siderbar from "../../components/Siderbar/Siderbar"
import NavbarProfil from "../../components/navbar/Navbar"
import Col from "react-bootstrap/esm/Col"
import Row from 'react-bootstrap/Row';
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import GetAll from "../../components/posts/GetAllPost/GetAll";
import Rightbutton from "../../components/rightbar/Rightbutton";
import { jwtDecode } from 'jwt-decode';

import { useEffect, useState } from "react";
import axios from "axios";

const Home=()=>{
   const token = localStorage.getItem('token');
   console.log(token)
   const decodedToken = jwtDecode(token);
   console.log(decodedToken)
   const id = decodedToken._id;
  
   const[homeprofile,sethomeprofile]=useState('')

    useEffect(()=>{
     axios.get("http://localhost:8888/users/"+id)
      .then((resp)=>{sethomeprofile(resp.data)})
      .catch((err)=>{console.log(err)})
      },[])
 
    console.log(homeprofile)
    return(
    <>
        <NavbarProfil/>
        <Row>
            <Col ms={2}>
            <Siderbar/>
            <div className="prof-home">
              <h2 className="name-home"> Profil User</h2>
              <img  src={homeprofile.profilePicture} className="photo-home" />
        
      <h3 className="desc-home">Name:{homeprofile.username}</h3>
      <h3 className="desc-home">ID: {homeprofile._id}</h3>
      <h3 className="desc-home">Birthdate: {homeprofile.birthdate}</h3>
      <h3 className="desc-home">Bio: {homeprofile.desc}</h3>

      </div>
             </Col>
             
             <Col ms={8}>
     
             <Feed/>
             <GetAll/>
            </Col>

             <Col ms={2}>
                 <Rightbar/> 
                 <br></br>
                 <Rightbutton/>
                
             </Col>
        </Row>
        
        

        </>
    )
}

export default Home