import "./Forgot.css"
import axios from "axios"
import { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';

const Forgot =()=>{
    const [email,setemail] = useState('')
    const navigate = useNavigate()

    const forgotfunction = async (e) => {
        e.preventDefault();
        if(email !== "" ) {
            
          //continue script
           axios.post("http://localhost:8888/auth/forget",{email})
            .then((res)=>{
                if(res.status === 200) {
            toast.success('Password link has been sent to your email');
                   navigate('/home')
            }
            }) 
        } else{
            toast.error('Please your mail false...')
            navigate('/*')
           
        }
        
      };

    const onReset = () => {
        navigate('/home')
      };

  return(
    <>
     <div className='forgot'>
     <div className='forgot-cover'>

     </div>
          <div className='forgot-form'>
            <Toaster/>
            <h1>forgot your password</h1>
            <p style={{marginLeft:'100px'}} >Please enter your email to send you a password reset link.</p>

        <Form  onSubmit={forgotfunction}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=> setemail(e.target.value)}
        />
        </Form.Group>
        
      
      <Button variant="primary" type="submit" className="btn-link">
      Send link via Email
      </Button>
      <Button type="button" className=" forgot-form-forgot" onClick={onReset}>
        Cancel
      </Button>

    
    </Form>
   

        </div>
        </div>
    </>
  )  
}
export default Forgot