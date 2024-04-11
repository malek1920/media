import './AddPost.css'
import { useState } from "react"
import axios from "axios"
import { convertToBase64 } from '../../../components/image/convertimage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';

const AddPost=()=>{
    const navigate = useNavigate()

    const [postImage, setPostImage] = useState( )
    const [description, setDescription] = useState( )
    const [Userid, setUserid] = useState( )

    
  
   
    const addpostfunction=(e)=>{
        e.preventDefault();
        
          //form valid
          axios.post("http://localhost:8888/post",{
          image:postImage,desc:description,userId:Userid
      })
      
      .then(
          ()=>{
              console.log("welcome new user")
              toast.success('User created Successfully !');
  
              navigate('/home')
          }
      ).catch(
        (err)=>{
          console.log(err)
          toast.error('Failed while Singup ...')
  
        }
      )}
      
        
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        
        setPostImage( base64 )
      
         console.log("base",base64) 
         
       }
    return(
        <>
        
            
        <Card style={{ width: '32rem' }} className='card'>

        <Form onSubmit={addpostfunction} >
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Image src={postImage}></Image>
        <Form.Control type="file" onChange={handleFileUpload}/>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>UserId</Form.Label>
        
        <Form.Control type="text" 
       onChange={(e)=> setUserid(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3}         
        onChange={(e)=> setDescription(e.target.value)}

        />
    
      </Form.Group>
          
      <Button className="button" type="submit">
        Save
      </Button>
    </Form>
    </Card>
        </>
    )
}
export default AddPost