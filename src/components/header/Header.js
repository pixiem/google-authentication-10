import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-5 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <img
              src="./pngegg.png"
              width="60"
              height="60"
              className="d-inline-block align-top "
              alt="React Bootstrap logo"
            />
            <Nav.Link className="fs-4 mx-3" href="#action1">HOME</Nav.Link>
            <Nav.Link className="fs-4  mx-3" href="#action2">SERVICES</Nav.Link>
            <Nav.Link className="fs-4  mx-3" href="#action2">ABOUT</Nav.Link>
            <Nav.Link className="fs-4  mx-3" href="#action2">CONTACT</Nav.Link>


          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
};

export default Header;