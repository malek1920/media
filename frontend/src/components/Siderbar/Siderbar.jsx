import "./Siderbar.css"
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome"
import { faHome, faPhotoFilm, faUsers } from"@fortawesome/free-solid-svg-icons"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Siderbar() {
  return (
    <>
      <Navbar className="nav" >
        <Container className="body">
        <FontAwesomeIcon icon={faHome} className="icon" />
        <Link to="/home" className="nav-link">
        <Navbar.Brand className="nav-brand" >Home</Navbar.Brand>
        </Link> 

        </Container>
      </Navbar>
    
      <Navbar className="nav" >
        <Container className="body">
        <FontAwesomeIcon icon={faUsers} className="icon" />
          <Link to="/users" className="nav-link">
          <Navbar.Brand className="nav-brand">People</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      
      <Navbar className="nav" >
        <Container className="body">
        <FontAwesomeIcon icon={faPhotoFilm}className="icon" />
        <Link to="/home" className="nav-link">
          <Navbar.Brand className="nav-brand">Photos</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      
      <Navbar className="nav" >
        <Container className="body">
        <FontAwesomeIcon icon={faUsers} className="icon" />
         <Link to="/profil" className="nav-link">
          <Navbar.Brand className="nav-brand" >Profile</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
   
    </>
  );
}

export default Siderbar;