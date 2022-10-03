import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {Navbar,Container,Nav,} from 'react-bootstrap';
import Dropdown from './Dropdown';
import '../styles/Navig.css'
function Navig() {
  return (
          <Navbar className="navbar" expand="lg">
           <Container>
            <Navbar.Brand href="/"><span className='logo'>SMMA_website</span></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                 {/* <Nav.Link href="#home">Home</Nav.Link>
                 <Nav.Link href="#link">Link</Nav.Link> */}
                 <Dropdown name="YOUTUBE" services={['YOUTUBE VIEWS','service2','service3']}/>
                 <Dropdown name="INSTAGRAM" services={['service1','service2']}/>
               </Nav>
               </Navbar.Collapse>
           </Container>
         </Navbar>
  )
}

export default Navig