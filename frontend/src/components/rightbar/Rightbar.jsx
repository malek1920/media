
import "./Rightbar.css";
import { useState,useEffect } from "react";
import axios from "axios";
 

 const Rightbar=()=> {
    
    const [products,setproducts]=useState([])
  
    useEffect(()=>{
        axios.get("http://localhost:8888/users")
        .then((resp)=>{setproducts(resp.data)})
        .catch((err)=>{console.log(err)})
      },[])

     
    
    return(
        <>
           <div>
        {products.map((el)=>(
            <div key={el._id} className="friend">
            <img className="sharePro" src={el.profilePicture} alt="" />
            <div className="title">
            <h3 > {el.username}</h3>
            <h3 > {el.email}</h3>
            
            </div>

            <button className="btn-follow">Follow</button>
            <button className="btn-unfollow">Unfollow</button>

            </div>
            ))}
            </div>

          
        </>
    )
  
 }
 export default Rightbar
 