import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Avatar } from '@mui/material';
import Home from './Home';
import StudentAtt from './StudentAtt';
function Navigate() {
  return (
    <>
      <BrowserRouter>
      <Navbar   sticky='top' className='nav'style={{background:" linear-gradient(132deg, rgb(227, 244, 253) 0.00%, rgb(170, 209, 226) 1.04%,rgba(255,255,255,0.3))"}} >
        <Container>
          <Navbar.Brand as={Link} to="/">KL ERP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/StdAt">StudentAtt</Nav.Link>
            <h3 className='student' >Student - Portal</h3>
          </Nav>
          
        </Container>
        <Avatar src="/broken-image.jpg" ></Avatar>
          <Button variant='outlined-secondary'  >2100030001</Button>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/StdAt" element={<StudentAtt/>}  />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigate