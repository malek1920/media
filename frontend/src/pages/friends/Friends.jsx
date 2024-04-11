import "./Friends.css"
import React ,{useState,useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import NavbarProfil from "../../components/navbar/Navbar"
import Siderbar from "../../components/Siderbar/Siderbar"
import Row from "react-bootstrap/esm/Row"
import Feed from "../../components/feed/Feed"
import Col from "react-bootstrap/esm/Col"
import Rightbar from "../../components/rightbar/Rightbar"
import Rightbutton from "../../components/rightbar/Rightbutton"


const Friends =()=>{
    const navigate = useNavigate()

    const [products,setproducts]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8888/users")
        .then((resp)=>{setproducts(resp.data)})
        .catch((err)=>{console.log(err)})
      },[])

    const deleteprofil=(id)=>{
        axios.delete("http://localhost:8888/users/"+id)
        .then(()=>{window.location.reload()})
        .catch((err)=>{console.log(err)})
      }
    return(
        <>
        <NavbarProfil/>
        <Row>
            <Col ms={2}>
            <Siderbar/>
            
             </Col>
             
             <Col ms={8}>
     
             <Feed/>

          <div>
        {products.map((el)=>(
            <div key={el._id} className="friend">
            <img  src={el.profilePicture} className="pict" />
            <h3 className="user">UserName: {el.username}</h3>
            <h3 className="user">Email: {el.email}</h3>
            <h3 className="user">Birthdate: {el.birthdate}</h3>
            <h3 className="user">Bio: {el.desc}</h3>
            
            <button onClick={()=>{navigate("/edit/"+el._id)}} className="btn-edit">Edit</button>
            <button className="btn-delet" onClick={()=>{deleteprofil(el._id)}}>Delete</button>

            </div>
            

        ))}
        </div>

                     </Col>
             <Col ms={2}>
                 <Rightbar/> 
                 <Rightbutton/>
                
             </Col>
        </Row>
        
        

        </>
    )
}

export default Friends