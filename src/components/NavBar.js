import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import React, { Fragment } from 'react'
import {Auth} from 'aws-amplify'
import { LinkContainer } from "react-router-bootstrap";

const NavBar = ({ authentication }) => {
  const handleLogout = async event => {
    await Auth.signOut();
    authentication.userHasAuthenticated(false);
  }
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer to="/plan" ><NavItem>Plan your meals</NavItem></LinkContainer>
        <LinkContainer to="/search" ><NavItem>Find a Recipe</NavItem></LinkContainer>
        <LinkContainer to="/create" ><NavItem>Create a new Recipe</NavItem></LinkContainer>
        {authentication.isAuthenticated
          ? <Fragment>
            <LinkContainer to="/plan" ><NavItem href="/users/1"> User</NavItem></LinkContainer>
            <NavItem onClick={handleLogout}>Logout</NavItem>
          </Fragment>
          : <Fragment>
            <LinkContainer to="/signup" ><NavItem>Signup</NavItem></LinkContainer>
            <LinkContainer to="/login" ><NavItem>Login</NavItem></LinkContainer>
          </Fragment>
        }
      </Nav>
    </Navbar>
  )
}
export default NavBar