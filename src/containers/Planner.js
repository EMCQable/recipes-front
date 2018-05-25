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
        {
            title: 'Long Event',
            start: '2018-05-07',
            end: '2018-05-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2018-05-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2018-05-16T16:00:00'
        },
        {
            title: 'Conference',
            start: '2018-05-11',
            end: '2018-05-13'
        },
        {
            title: 'Meeting',
            start: '2018-05-12T10:30:00',
            end: '2018-05-12T12:30:00'
        },
        {
            title: 'Birthday Party',
            start: '2018-05-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2018-05-28'
        }
    ],	
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

