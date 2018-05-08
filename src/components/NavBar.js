import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import React from 'react'

const NavBar = (props) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav
        pullRight
      >
        <NavItem>
          <Link to="/User">User</Link>
        </NavItem>
        <NavItem>
          <Link to="/Search">Find a Recipe</Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
export default NavBar