import React from 'react'
import { Navbar} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import diory from '../images/diory.jpg'

export default function Navigasi() {
    return (
        <div>
            <Navbar className='py-4' style={{background:'#f1f3ff'}} expand="lg">
            <Container>
                <a href='https://www.instagram.com/diorypribadi_sinaga/' target={'blank'}><img src={diory} alt='diory' className='mx-1 rounded-circle'/></a>
                <Navbar.Brand href="#home" style={{fontSize:'26px',fontWeight:"680",color:'red',fontStyle:'italic'}}>Sinaga<span style={{color:'gold'}}>Diory</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto" style={{fontSize:'18px',fontWeight:'520'}}>
                    <Nav.Link style={{color:'black'}} href="#home">OurService</Nav.Link>
                    <Nav.Link style={{color:'black'}} href="#link">WhyUs</Nav.Link>
                    <Nav.Link style={{color:'black'}} href="#home">Testimonials</Nav.Link>
                    <Nav.Link style={{color:'black'}} href="#link">FAQ</Nav.Link>
                    <Button  style={{background:'#5cb85f'}} className='pt-1 px-3 mx-2'>Register</Button>{' '}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
