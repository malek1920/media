
import "./Share.css";
import { faFaceSmile, faImage, faLocationDot, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome"
import jwtDecode from "jwt-decode";
import axios from 'axios';
import { useEffect, useState } from "react";

const Share=()=> {
  const[getuser,setgetuser]=useState('')

  const token = localStorage.getItem('token');
  console.log(token)
  const decodedToken = jwtDecode(token);
  console.log(decodedToken)
  const id = decodedToken._id;


    useEffect(()=>{
      axios.get("http://localhost:8888/users/"+id)
       .then((resp)=>{setgetuser(resp.data)})
       .catch((err)=>{console.log(err)})
       },[])

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={getuser.profilePicture} alt="" />
          

          <input
            placeholder="What's up ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    
                    <FontAwesomeIcon icon={faImage} 
                        style={{color:'tomato'}}

                     className="me-3"/>

                    <span className="shareOptionText">Photo or Video</span>
                    
                </div>
                <div className="shareOption">
                
                    <FontAwesomeIcon icon={faTag}   
                    style={{color:'blue'}}

                    className="me-3"/>

                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <FontAwesomeIcon icon={faLocationDot} 
                    style={{color:'green'}} className="me-3"/>
                    
                    
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    
                    <FontAwesomeIcon icon={faFaceSmile}  
                    style={{color:'goldenrod'}}
                    className="me-3"/>

                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
export default Share