import DatePicker from "react-16-bootstrap-date-picker"
import React from 'react'
import { API } from "aws-amplify";
import { FormGroup, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import {connect } from 'react-redux'
import './ScheduleForCook.css'

class ScheduleForCook extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Initial state with date
    this.state = {
      selectedDate: new Date().toISOString(),
      formattedValue: new Date().toISOString().slice(0, 10)
    };

    // This binding is necessary to make `this` work in the callback
    this.onChange = this.onChange.bind(this);
  }

  onChange(value, formattedValue) {
    let newValue = value
    if (value) {
      newValue = value.slice(0, 10)
    }
    this.setState({
      selectedDate: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: newValue // Formatted String, ex: "11/19/2016"
    });
  }

  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    // var hiddenInputElement = document.getElementById("example-datepicker");
  }

  handleSubmit = async event => {
    event.preventDefault()
    const user = this.props.user
    let schedule = user.Items[0].schedule
    const recipe = this.props.recipe

    const cookDate = {
      food: {
        id: recipe.id,
        name: recipe.name,
        servings: recipe.servings
      },
      date: {
        start: this.state.formattedValue
      }
    }
    this.setState({
      selectedDate: null
    })

    schedule.push(cookDate)

    await API.put("users", "/1", {
      body:
        {
          schedule
        }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup >
            <ControlLabel>Add to calendar</ControlLabel>
            <DatePicker id="example-datepicker" value={this.state.selectedDate} onChange={this.onChange} />
            <HelpBlock></HelpBlock>
            <Button type="submit" >Save</Button>
          </FormGroup>
        </form >
      </div >
    );
  }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => {
  return {
    user: state.schedule
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleForCook)