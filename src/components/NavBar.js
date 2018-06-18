import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import React, { Fragment } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../reducers/userReducer'

const NavBar = (props) => {
  const handleLogout = async () => {
    props.logout()
    props.history.push('/')
  }
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to='/search' ><NavItem>Find a Recipe</NavItem></LinkContainer>
          <LinkContainer to='/create' ><NavItem>Create a new Recipe</NavItem></LinkContainer>
        </Nav>
        {props.isAuthenticated
          ? <Fragment>
            <Nav>
              <LinkContainer to='/plan' ><NavItem>Plan your meals</NavItem></LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to='/settings' ><NavItem>Preferences</NavItem></LinkContainer>
              <NavItem onClick={handleLogout}>Logout</NavItem>
            </Nav>
          </Fragment>
          : <Fragment>
            <Nav pullRight>
              <LinkContainer to='/signup' ><NavItem>Signup</NavItem></LinkContainer>
              <LinkContainer to='/login' ><NavItem>Login</NavItem></LinkContainer>
            </Nav>
          </Fragment>
        }

      </Navbar.Collapse>
    </Navbar >
  )
}

const mapDispatchToProps = {
  logout
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar))