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
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer to='/search' ><NavItem>Find a Recipe</NavItem></LinkContainer>
        <LinkContainer to='/create' ><NavItem>Create a new Recipe</NavItem></LinkContainer>
        {props.isAuthenticated
          ? <Fragment>
            <LinkContainer to='/plan' ><NavItem>Plan your meals</NavItem></LinkContainer>
            <LinkContainer to='/settings' ><NavItem>Preferences</NavItem></LinkContainer>
            <NavItem onClick={handleLogout}>Logout</NavItem>
          </Fragment>
          : <Fragment>
            <LinkContainer to='/signup' ><NavItem>Signup</NavItem></LinkContainer>
            <LinkContainer to='/login' ><NavItem>Login</NavItem></LinkContainer>
          </Fragment>
        }
      </Nav>
    </Navbar>
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