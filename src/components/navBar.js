import React from 'react';
import {Navbar} from 'react-bootstrap';

const NavBar = () => {


    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">USERS LIST</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  };
  
  export default NavBar;