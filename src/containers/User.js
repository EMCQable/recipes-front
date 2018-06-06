import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Home.css'

class User extends Component {

  render() {
    return (
      <div className='Preferences'>
        <div className='lander'>
          <h1>Recipes</h1>
          <h4>Settings page</h4>
          <p>Servings consumed per food item per day: 3</p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    isAuthenticating: state.user.isAuthenticating,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

