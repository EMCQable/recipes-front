import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Overlay } from 'react-bootstrap'
import helpText from '../helpText'

const CustomPopover = ({ style, location }) => {

  return (
    <div
      style={{
        ...style,
        backgroundColor: '#EEE',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
        border: '1px solid #CCC',
        borderRadius: 3,
        padding: 10
      }}
    >
      <strong>{getText(location)}</strong>
    </div>
  )
}

const getText = (location) => {
  if (helpText[location] === '') {
    return 'Welcome to Pihkaniitty!'
  }
  return helpText[location]
}

class HelpThingy extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      show: false
    }
  }

  handleToggle() {
    this.setState({ show: !this.state.show })
  }

  render() {
    const location = window.location.pathname.split('/')[1]
    return (
      <div
        style={{
          height: 100,
          margin: 'auto'
        }} >
        <Button
          ref={button => {
            this.target = button
          }}
          onClick={this.handleToggle}
        >
          Help
        </Button>

        <Overlay
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          placement='top'
          container={this}
          target={() => ReactDOM.findDOMNode(this.target)}
        >
          <CustomPopover location={location} />
        </Overlay>
      </div>
    )
  }
}

export default HelpThingy