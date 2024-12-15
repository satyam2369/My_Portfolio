import React from 'react'
import './skillCard.css'


function SkillCard(props) {
  return (
    
      <div className="card animate">
      <div className="card-content">
        <img src={props.img} alt="React Logo" className="card-image" />
        <h2 className="card-title">{props.title}</h2>
      </div>
    </div>
    
  )
}

export default SkillCard
