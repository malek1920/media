import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function NavbarProfil() {
  return (
    <>
    <Navbar expand="lg" className=" navbar" >
      <Container fluid>
        <Navbar.Brand href="#">Media</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link to="/"  className='link-page'>Home</Link> */}
            <Link to="/home"  className='link-page'>Home</Link>
            <Link to="/profil" className='link-page'>Profil</Link>
            <Link to="/users" className='link-page'>Friends</Link>
           
           
          </Nav>
          
          <Nav>
          <Link to="/" className='nav-sign'>Sign in</Link>
          {/* <Link to="/login" className='nav-sign'>Sign in</Link> */}
            <Link to="/register" className='nav-sign'>Sign up</Link>
            <Link to="/logout" className='nav-sign'>Logout</Link>

          </Nav>
        </Navbar.Collapse>
         
      </Container>
      
    </Navbar>
  </>
  );
}

export default NavbarProfil;