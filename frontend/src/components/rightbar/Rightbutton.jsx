import "./Rightbutton.css";
import "./Rightbar.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCircle } from"@fortawesome/free-solid-svg-icons"
 

 const Rightbutton=()=> {
    
    const [products,setproducts]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8888/users")
        .then((resp)=>{setproducts(resp.data)})
        .catch((err)=>{console.log(err)})
      },[])

     
   
    return(
        <>
           <div className="butt">
        {products.map((pre)=>(
            < div key={pre._id} >
            <img className="shareProf" src={pre.profilePicture} alt="" />
            <FontAwesomeIcon icon={faCircle} className="icon" />
            <h3 className="name" > {pre.username}</h3>
          
            </div>
            ))}
            </div>

    </>
    )
  
 }
 export default Rightbutton
 