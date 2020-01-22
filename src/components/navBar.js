import React from 'react';
import {Navbar} from 'react-bootstrap';

import grid from './gridicon.png';
import list from './listicon.png'

const NavBar = () => {


    return (
      <div>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#231e39'}}>
  <Navbar.Brand href="/" style={{ fontSize: '40px', fontWeight:'bolder', color:'white', marginRight:'990px'}}>USERS LIST</Navbar.Brand>
  <a href='/users'><img className="grid" src={grid} alt="" style={{width:'40px', height:'40px'}}/></a>
  <a href='/users'><img className="list" src={list} alt="" style={{width:'55px', height:'55px', marginLeft:'20px'}}/></a>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  };
  
  export default NavBar;