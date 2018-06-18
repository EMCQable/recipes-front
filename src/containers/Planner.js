import React, { Component } from 'react'
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import FullCalendar from 'fullcalendar-reactwrapper'
import './Planner.css'
import { advanceDate, formatDate } from '../utils/dateUtils'
import { connect } from 'react-redux'
import { initSchedule } from '../reducers/scheduleReducer'



class Planner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [
        {
          title: 'All Day Event',
          start: '2018-05-01'
        },
      ],
    }
  }

  async componentDidMount() {
    //await this.props.initSchedule()
    this.getSchedule()
  }

  getSchedule() {
    /*let schedule = this.props.schedule.Items[0].schedule
    const servingsPerDay = this.props.schedule.Items[0].settings.servingsPerDay
    schedule.forEach(cookDate => cookDate.servingsPerDay = servingsPerDay)
    const scheduleAsDates = schedule.map(this.formatCookDate)*/
  }

  render() {
    const today = new Date()
    const defaultDate = formatDate(today.getFullYear(), today.getMonth() + 1, today.getDate())

    return (
      <div className='calendar' id='example-component'>
        <FullCalendar
          id='your-custom-ID'
          header={{
            left: 'prev today',
            right: 'next',
            center: 'title',
          }}
          defaultDate={defaultDate}
          //navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow 'more' link when too many events
          events={this.props.schedule}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  initSchedule
}

const formatCookDate = (cookDate) => {
  let servings = ''
  let end = ''
  if (cookDate.food.servings) {
    servings = Number(cookDate.food.servings)
    const servingsPerDay = Number(cookDate.servingsPerDay)

    const advance = Math.floor(servings / servingsPerDay)

    const date = cookDate.date.start

    end = advanceDate(date, (advance + 1))

  }
  return {
    title: cookDate.food.name,
    start: cookDate.date.start,
    end: end
  }
}

const mapStateToProps = (state) => {
  let schedule = state.schedule.Items[0].schedule
  const servingsPerDay = state.schedule.Items[0].settings.servingsPerDay
  schedule.forEach(cookDate => cookDate.servingsPerDay = servingsPerDay)
  const scheduleAsDates = schedule.map(formatCookDate)
  return {
    schedule: scheduleAsDates
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planner)