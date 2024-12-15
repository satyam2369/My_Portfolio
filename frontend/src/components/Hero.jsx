import React from 'react'
import './Hero.css';
import cv from '../Satyam-Mishra-CV.pdf';
import Laptop from './Laptop';
function Hero() {
  return (
    // <div className='contain'>
    <div className='heromain'>
      <Laptop/>
      <div className='back'></div>.
      <div className="hero-left-container">
      <div className='welcome'>
        <div className='line'></div>
        <p>Welcome To My Profile</p>
      </div>
      <h1>I am Satyam Mishra<br/>
      Computer<span> Science Student<br/>
      & Passionate Programmer</span>
      </h1>
      <p className='aim'>I aim to secure an engaging internship or co-op position in the field of computer science. I am enthusiastic about applying my academic knowledge, programming skills, and problem-solving abilities to gain practical experience and contribute to a dynamic team</p>
      <a href={cv} download="Satyam-Mishra-Resume" className='cv'>Download CV</a>
      </div>
    </div>
    // {/* </div> */}
  )
}

export default Hero
