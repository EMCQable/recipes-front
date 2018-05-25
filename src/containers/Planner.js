import React, { Component } from 'react';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import FullCalendar from 'fullcalendar-reactwrapper';
import './Planner.css'

export default class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
            title: 'All Day Event',
            start: '2018-05-01'
        },
    ],	
    }
  }

  componentDidMount(){
    this.getSchedule()
  }

  getSchedule(){
    let schedule = this.props.user.Items[0].schedule
    const scheduleAsDates = schedule.map(this.formatCookDate)
    this.setState({
      events: scheduleAsDates
    })
  }

  formatCookDate(cookDate){
    return {
      title: cookDate.food.name,
      start: cookDate.date.start,
    }
  }

  render() {
    const today = new Date()
    let month = (today.getMonth() + 1)
    if (month < 10){
      month = '0' + month
    }
    const defaultDate = (today.getFullYear() + '-' + month + '-' + today.getDate())

    return (
      <div className="calendar" id="example-component">
        <FullCalendar
          id="your-custom-ID"
          header={{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
          }}
          defaultDate={defaultDate}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too many events
          events={this.state.events}
        />
      </div>
    );
  }
}

