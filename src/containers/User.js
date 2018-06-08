import React, { Component } from 'react'
import { connect } from 'react-redux'
import './User.css'
import { changeDailyServings } from '../reducers/scheduleReducer'
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      servings: Number(this.props.servingsPerDay)
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const serverings = this.state.servings.toString()
    await this.props.changeDailyServings(serverings)
    this.setState({ editing: false })
  }

  validateForm() {
    return (
      Number.isInteger(this.state.servings) &&
      this.state.servings > 0 &&
      this.state.servings < 11
    )
  }

  handleServingsChange = event => {
    this.setState({
      servings: Number(event.target.value)
    })
  }

  validateServings() {
    if (this.state.servings > 0 &&
      this.state.servings < 11) {
      return 'success'
    }
    return 'error'
  }

  notEditing = (servings) => {
    return (
      <div>
        <p>Servings consumed per food item per day: {servings}</p>
        <Button
          onClick={() => this.setState({ editing: true })}
        >Edit</Button>
      </div>
    )
  }

  editing = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId='servings'
          bsSize='small'
          validationState={this.validateServings()}>
          <ControlLabel>Servings</ControlLabel>
          <FormControl
            type='number'
            value={this.state.servings}
            onChange={this.handleServingsChange}
          />
        </FormGroup>
        <Button
          block
          bsSize='small'
          type='submit'
          disabled={!this.validateForm()}
        >Submit</Button>
        <Button
          block
          bsSize='small'
          onClick={() => this.setState({ editing: false })}
        >cancel</Button>
      </form>
    )
  }

  render() {
    return (
      <div className='SettingsForm'>
        <h1>Recipes</h1>
        <h4>Settings page</h4>
        {this.state.editing === false
          ? this.notEditing(this.props.servingsPerDay)
          : this.editing()}
      </div >
    )
  }
}

const mapDispatchToProps = {
  changeDailyServings
}

const mapStateToProps = (state) => {
  return {
    servingsPerDay: state.schedule.Items[0].settings.servingsPerDay
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

