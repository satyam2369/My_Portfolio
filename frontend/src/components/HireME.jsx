import React from 'react'
import { Link } from 'react-router-dom'
import './HireMe.css';
import freelance from '../Assets/freelance.png'
import job from '../Assets/job.png'

function HireME() {
  return (
    <div className='hireme_main'>
    <div className='select_work'>
        <div className='job'>
            <img className='job_img' src={job} alt="" />
            <Link to="" className='provide-Job button-62 button-63'>Provide Job</Link>
        </div>
        <div className='freelance'>
            <img className='freelace_img ' src={freelance} alt="" />
            <Link to="" className=' provide-freelance button-62 button-63'>Provide Work</Link>
        </div>
      
    </div>
    </div>
  )
}

export default HireME
