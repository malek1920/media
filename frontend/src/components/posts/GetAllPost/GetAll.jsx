import "./GetAll.css"
import React ,{useState,useEffect} from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faTrashCan } from "@fortawesome/free-solid-svg-icons";

const GetAll = ()=>{
    const [products,setproducts]=useState([])
    
    
    useEffect(()=>{
        axios.get("http://localhost:8888/post")
        .then((resp)=>{setproducts(resp.data)})
        .catch((err)=>{console.log(err)})
      },[])
    
      const deletepost=(id)=>{
         axios.delete("http://localhost:8888/post/"+id)
         .then(()=>{window.location.reload()})
         .catch((err)=>{console.log(err)})
       }
      
    return(
        <div>
        
        {products.map((el)=>(
            <div key={el._id} >
          <img width={400} height={200} src={el.image} className="post-all"></img>

            <p className="info1">ID: {el._id}</p>
            <p className="info1">UserId: {el.userId}</p>
            <p className="info1">Description: {el.desc}</p>
            <FontAwesomeIcon className="icon-delet" icon={faTrashCan} onClick={()=>{deletepost(el._id)}} />
            <hr></hr>
        

            </div>
        ))}


        
        </div>
    )
}
export default GetAll