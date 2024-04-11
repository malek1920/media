import "./GetpostByid.css"
import React ,{useState,useEffect} from "react"
import axios from "axios"
import { jwtDecode } from 'jwt-decode';


const Getpostbyid = ()=>{
    const [post,setpost]=useState([])
    

   const token = localStorage.getItem('token');
   console.log(token)
   const decodedToken = jwtDecode(token);
   console.log(decodedToken)
   const id = decodedToken._id;
    useEffect(()=>{
        axios.get("http://localhost:8888/post/user/"+id)
        .then((resp)=>{setpost(resp.data)})
        .catch((err)=>{console.log(err)})
      },[])
    
     
      console.log(post)

    return(
        <>
        <div className="post-prof">
              
        { post.map((el)=>(
            <>
                    <img  src={el.image} className="img"/> 
                    <p>ID: {el._id}</p>
                    

                   <p>Description: {el.desc}</p>
                     <hr></hr>

            </>
        )

        )}

    
        
        </div>
        </>
    )
}
export default Getpostbyid