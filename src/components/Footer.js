import React from 'react'
import HelpThingy from './HelpThingy'
import { Navbar } from 'react-bootstrap'

const Footer = (props) => {
  return (
    <Navbar fixedBottom>
      <HelpThingy />
    </ Navbar>
  )
}

export default Footer