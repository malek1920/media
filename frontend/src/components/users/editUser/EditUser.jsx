import './EditUser.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams} from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast, { Toaster } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

import { convertToBase64 } from '../../image/convertimage';
import Image from 'react-bootstrap/Image';

function EditUser() {
    const navigate = useNavigate()
    
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [birthdate,setbirthdate]=useState('')
    const [image,setimage]=useState('')
    
    
    

    
    const token = localStorage.getItem('token');
    console.log(token)
   const decodedToken = jwtDecode(token);
   console.log(decodedToken)
   const id = decodedToken._id;
  

        
  //  useEffect(()=>{
  //   axios.get("http://localhost:8888/users/"+id)
  //    .then((req)=>{
  //     setusername(...username,req.data.username);
  //     setpassword(...password,req.data.password);
  //     setbirthdate(...birthdate,req.data.birthdate);
  //     setemail(...email,req.data.email);
  //     setimage(...image,req.data.profilePicture)
  //    })
  //    .catch((err)=>{console.log(err)})
  //    },[])

  //   console.log(setemail)

    const editfunction=(e)=>{
      e.preventDefault();
      
        //form valid
        axios.put("http://localhost:8888/users/"+id,{
        username,password,email,birthdate,profilePicture:image
    })
    
    .then(
        ()=>{
            console.log("welcome new user")
            toast.success('User created Successfully !');

            navigate('/')
        }
    ).catch(
      (err)=>{
        console.log(err)
        toast.error('Failed while   Singup ...')

      }
    )
    }
     
    const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
      
       setimage( base64 )
       console.log("base",base64) 
       
      }
  return (
    <div className='edit'>
      <div className='edit-content'>
    <h1>Social Media Application</h1>
    <Toaster/>
    <Form onSubmit={editfunction}>
      
        <Form.Group className="mb-3" controlId="Username">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter Your UserName" 
        value={username}
        onChange={(e)=>setusername(e.target.value)}
         />
        </Form.Group>
        

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=> setemail(e.target.value)} 
        value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={(e)=> setpassword(e.target.value)} 
        value={password}
       
        />
      </Form.Group>
      
        <Form.Group className="mb-3" controlId="birthdate">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control type="date" 
         onChange={(e)=> setbirthdate(e.target.value)} 
        value={birthdate}
        
         />
        </Form.Group>  
         <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Image src={image}></Image>
        <Form.Control type="file" onChange={handleFileUpload}/>
      </Form.Group> 
          
      <Button className="button"variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
    </div>
        </div>

  );
}

export default EditUser;