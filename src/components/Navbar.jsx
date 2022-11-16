import React from 'react';
import Container  from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';


const Nav = () => {
  return (
    <Navbar className='nav'>
      <Container className='nav-container'>
          <Navbar.Brand href="#landingpage">quikk</Navbar.Brand>          
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Home</Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav