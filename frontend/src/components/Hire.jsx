import React from 'react'
import './Hire.css'
import HireForm from './HireForm'
import Navbar from './Navbar'
function Hire() {
  return (
    <div style={{backgroundColor:"var(--background)",height:"100%"}}>
        <Navbar/>
    <div className='hire-main'>
      <div className="hire-contact">
        <h1 className='hire-name'> Let's Talk</h1>
        <p className="hire-mail">satyam13omishra@gmail.com</p>
        <p className="hire-phone">+91 7888773430</p>
      </div>
      <HireForm/>
    </div>
    </div>
  )
}

export default Hire
