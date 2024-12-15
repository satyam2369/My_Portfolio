import React from 'react'
import './show.css';
import mern from "../Assets/mern.png"
import spring from "../Assets/spring.png"
import codeforces from "../Assets/codeforces.png"
import leetcode from "../Assets/leetcode.png"
function Show() {
  return (
    <div className='show-main'>
      <div className='show-div animate2'>
        <img src={mern} alt="mern" />
        <p>I have done over 5 Industry Level projects in MERN</p>
      </div>
      <div className='show-div animate2'>
        <img src={spring} alt="mern" />
        <p>I have built a Industry Level project in SpringBoot</p>
      </div>
      <div className='show-div animate2'>
        <img src={leetcode} alt="mern" />
        <p>I have done over 5 Industry Level projects in MERN</p>
      </div>
      <div className='show-div animate2'>
        <img src={codeforces} alt="mern"  />
        <p>I have built 1 Industry Level project in SpringBoot</p>
      </div>
      
    </div>
  )
}

export default Show
