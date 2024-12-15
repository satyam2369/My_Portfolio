import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='NavMain'>
      <div className='details-container'>
      <p className='name'><span>Sat</span>yam</p>
      <p className='email'>satyam13omishra@gmail.com</p>
      <p className='phone'>+91 7888773430</p>
      </div>
      <div className='links'>
        <Link to="/"  className='nav-link'>Home</Link>
        <Link className='nav-link' to="/achievements" >Achievements</Link>
        <a  className='nav-link'>Portfolio</a>
        <Link  to="/hireme" className='hire'><span>Hire</span> Me!</Link>
      </div>
    </div>
  )
}

export default Navbar;
