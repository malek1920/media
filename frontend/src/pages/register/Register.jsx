import './Register.css'
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'react-bootstrap/Image';
import { convertToBase64 } from '../../components/image/convertimage';

function Register() {
    const navigate = useNavigate()
    
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [birthdate,setbirthdate]=useState('')
    const [postImage, setPostImage] = useState( )
    const [desc, setDesc] = useState( )

    const [errors,seterrors]=useState(
      {
        username:'',
        email:'',
        password:'',
        birthdate:''
      }
    )
    

    const formValidation =()=>{
      let status = true;
      let localErrors= {...errors}
      if(username == ""){
         localErrors.username = 'Username required';
         status = false;

      }
      
     if(email == ""){
      localErrors.email = 'Email required';
      status = false;
   }
     if(password == ""||password.length<2){
      localErrors.password = 'Password  required and min 2 caracters';
      status = false;

   }
     seterrors(localErrors)
     return status;
    }

    const registerfunction=(e)=>{
      e.preventDefault();
      if (formValidation ()){
        //form valid
        axios.post("http://localhost:8888/auth/register",{
        username,password,email,birthdate,profilePicture:postImage,desc
    })
    
    .then(
        (res)=>{
            console.log("welcome new user")

            toast.success('User created Successfully !');

            navigate('/')
        }
    ).catch(
      (err)=>{
        console.log(err)
        toast.error('Failed while Singup ...')

      }
    )
    
      }else{
        console.log('form invalid')
      }
    
   
    }
    const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      
      setPostImage( base64 )
    
       console.log("base",base64) 
       
     }
  return (
    <div className='register'>
      <div className='register-cover'>

      </div>
      <div className='register-content'>
    <h1>Social Media Application</h1>
    <h3>Register Form</h3>
    <Toaster/>
    <Form onSubmit={registerfunction}>
      
        <Form.Group className="mb-3" controlId="Username">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter Your UserName" 
        onChange={(e)=> setusername(e.target.value)}
         />
        </Form.Group>
        {
          errors.username !=" " ? <div style={{textAlign:'left' ,color:'orangered'}}>
            {errors.username}
          </div>: ''
         }

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=> setemail(e.target.value)}
        />
      </Form.Group>
      {
          errors.email !=" " ? <div style={{textAlign:'left' ,color:'orangered'}}>
            {errors.email}
          </div>: ''
         }

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={(e)=> setpassword(e.target.value)}
        />
      </Form.Group>
      {
          errors.password !=" " ? <div style={{textAlign:'left' ,color:'orangered'}}>
            {errors.password}
          </div>: ''
         }
      
        <Form.Group className="mb-3" controlId="birthdate">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control type="date" 
        onChange={(e)=> setbirthdate(e.target.value)}
         />
        </Form.Group>  
        
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Bio</Form.Label>
        <Form.Control as="textarea" rows={3}         
        onChange={(e)=> setDesc(e.target.value)}

        />
    
      </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Image src={postImage}></Image>
        <Form.Control type="file" onChange={handleFileUpload}/>
      </Form.Group>
          
      <Button className="button" type="submit">
        Sign up
      </Button>
    </Form>
    </div>
        </div>

  );
}

export default Register;