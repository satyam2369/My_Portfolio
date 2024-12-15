import React from 'react'
import './Laptop.css';
// import phone from '../Assets/phone.png'
import laptop from '../Assets/laptop.png'

const links = ["https://www.linkedin.com/in/satyam-mishra-b51a25250/", "https://www.google.com","https://www.google.com","https://github.com/satyam2369","https://leetcode.com/u/Satyam_Mishra_1/"];

const handleClick = (index) => {
  console.log(index);
  window.open(links[index], '_blank');  // Open in a new tab
}

function Laptop() {
  return (
    <div className='phone-container'>
      <div onClick={() => handleClick(0)} className='icon-div'></div>
      <div onClick={() => handleClick(1)} className='icon-div insta'></div>
      <div onClick={() => handleClick(2)} className='icon-div gmail'></div>
      <div onClick={() => handleClick(3)} className='icon-div git'></div>
      <div onClick={() => handleClick(4)} className='icon-div leetcode'></div>
      <img className="phonePng" src={laptop} alt="" />
    </div>
  );
}

export default Laptop
