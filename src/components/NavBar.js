import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import React, { Fragment } from 'react'
import {Auth} from 'aws-amplify'

const NavBar = ({ authentication }) => {
  const handleLogout = async event => {
    await Auth.signOut();
    authentication.userHasAuthenticated(false);
  }
  console.log(authentication)
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem>
          <Link to="/plan">Plan your meals</Link>
        </NavItem>
        <NavItem>
          <Link to="/Search">Find a Recipe</Link>
        </NavItem>
        <NavItem>
          <Link to="/create">Create a new Recipe</Link>
        </NavItem>
        {authentication.isAuthenticated
          ? <Fragment>
            <NavItem>
              <Link to="/users/1">User</Link>
            </NavItem>
            <NavItem onClick={handleLogout}>Logout</NavItem>
          </Fragment>
          : <Fragment>
            <NavItem>
              <Link to="/signup">Signup</Link>
            </NavItem>
            <NavItem>
              <Link to="/login">Login</Link>
            </NavItem>
          </Fragment>
        }
      </Nav>
    </Navbar>
  )
}
export default NavBar