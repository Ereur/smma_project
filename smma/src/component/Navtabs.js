import React from 'react'
import { Card, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../styles/Showingoffers.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navtabs() {
  return (
    <Container>
        <Container className='d-flex justify-content-center'>
            <Navbar bg="none" variant="none">
            <Container>
            <Nav className="me-auto">
               <Nav.Link className='links' href="#Home">Youtube HQ Subscribers</Nav.Link>
                <Nav.Link className='links' href="#features">Youtube Subscribers</Nav.Link>
             <Nav.Link className='links' href="#pricing">Fast Youtube Subscribers</Nav.Link>
                <Nav.Link className='links' href="#indian">Youtube Indian Subscribers</Nav.Link>
            </Nav>
            </Container>
         </Navbar>
    </Container>
    <Container>
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>50 Youtube HQ Subscribers</Card.Title>
        <Card.Text>
          just for 3,60$
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Container>
    </Container>
  )
}

export default Navtabs