import React from 'react'
import { Dropdown } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BNavbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import IMG_2437 from '../assets/IMG_2437.png';
import { FaSearch } from 'react-icons/fa'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
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
            <Nav.Link href="/about">About&nbsp;us</Nav.Link>
            <Nav>
              <Dropdown title="Products" id='products'>
                <DropdownItem href='/products/overview' id="optionOne">Overview</DropdownItem>
                <DropdownItem href='/products/paytrack' id="optionTwo">Paytrack</DropdownItem>
                <DropdownItem  href="/connectpay"id="optionThree">ConnectPay</DropdownItem>
              </Dropdown>  
            </Nav>
            <Nav.Link href="/terms">Terms</Nav.Link>
            <Nav.Link href="/privacy">Privacy</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
            <Nav.Link href="">< FaSearch /></Nav.Link>
            <Nav.Link href='/products'><button className='nbutton'>Get&nbsp;Started</button></Nav.Link>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  )
}

export default Navbar