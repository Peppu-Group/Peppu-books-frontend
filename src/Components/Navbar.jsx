import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BNavbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import IMG_2437 from '../assets/IMG_2437.png';
import {FaSearch} from 'react-icons/fa'
import '../App.css';
const Navbar = () => {
   
  return (
    <BNavbar className='navbar' expand="lg">
    <Container>
    <BNavbar.Brand href="#home">
            <img
              src={IMG_2437}
              width="10%"
              className="d-inline-block align-top,"
            />
          </BNavbar.Brand>
      <BNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BNavbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-menu">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
          <Nav.Link href="/about">About&nbsp;us</Nav.Link>
          <Nav.Link href="">< FaSearch/></Nav.Link>
        <Nav.Link href='https://app.peppubooks.com/register'><Button variant="success">Get&nbsp;Started</Button></Nav.Link>        
        </Nav>
      </BNavbar.Collapse>
    </Container>
  </BNavbar>
  )
}

export default Navbar