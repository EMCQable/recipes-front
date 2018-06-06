import React from 'react'
import HelpThingy from './HelpThingy'
import { Navbar } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <Navbar>
        <HelpThingy />
      </ Navbar>
    </div>
  )
}

export default Footer