import './Login.css'
import axios from 'axios';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login=()=>{
    const navigate = useNavigate()

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [errors,seterrors]=useState(
      {
        email:'',
        password:''
      }
    )

    
    const formValidation =()=>{
      let status = true;
      let localErrors= {...errors}

     if(email === ""){
      localErrors.email = 'Email required';
      status = false;
   }
     if(password === ""||password.length<2){
      localErrors.password = 'Password  required and min 2 caracters';
      status = false;

   }
     seterrors(localErrors)
     return status;
    }

    const Loginfunction=(e)=>{
        e.preventDefault();
        if (formValidation ()){
          //form valid
          axios.post("http://localhost:8888/auth/login",{
            password,email
        })
        .then((res)=>{
                console.log(res.data)
                //save user data localStorge
                localStorage.setItem("token",res.data)
                toast.success('User Login !');
                setpassword('')
                setemail('')

                navigate('/home')

              })
        .catch((err)=>{
            console.log(err.message)
            toast.error('Failed while Sing in ...')

        }) 
        }else{
          console.log('form invalid')
        }
           
        }
        const handelLoginRegister=()=>{
          navigate('/register')
        }
    return(
        <div className='login'>
          <div className='login-cover'>

          </div>
          <div className='login-form'>
            <Toaster/>
        <h1>Login Form</h1>
        <Form onSubmit={Loginfunction}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=> setemail(e.target.value)}
        />
      </Form.Group>
        {
          errors.email !==" " ? <div style={{textAlign:'left' ,color:'orangered'}}>
            {errors.email}
          </div>: ''
         }
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={(e)=> setpassword(e.target.value)}
        />
      </Form.Group>
        {
          errors.password !==" " ? <div style={{textAlign:'left' ,color:'orangered'}}>
            {errors.password}
          </div>: ''
         }
         
      <Button variant="primary" type="submit" className='btn1'>
        Sign in
      </Button>

    
    </Form>
   
    <Link to="/forgot"className="loginForgot" >Forgot Password?</Link>

            <Button className="loginRegisterButton" onClick={handelLoginRegister}>
              Create a New Account
            </Button>
        </div>
        </div>
    )
}
export default Login