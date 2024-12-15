import React from 'react'
import './SkillsSection.css'
import SkillCard from './SkillCard'
import reactLogo from '../Assets/React_icon.png'
import mongoLogo from '../Assets/mongoDB.png'
import nodeLogo from '../Assets/nodeJS.png'
import expressLogo from '../Assets/express.png'
import javaLogo from '../Assets/java.png'
import cppLogo from '../Assets/C++.png'
import sqlLogo from '../Assets/mysql.png'
function SkillsSection() {
  return (
    <div className='skill-section-main'>
      <h1 className='skill-section-heading animate'>My Skills</h1>
      <div className='skills'>
        <SkillCard img = {javaLogo} title = "JAVA"/>
        <SkillCard img = {cppLogo} title = "CPP"/>
        <SkillCard img = {reactLogo} title = "ReactJS"/>
        <SkillCard img = {nodeLogo} title = "NodeJS"/>
        <SkillCard img = {expressLogo} title = "ExpressJS"/>
        <SkillCard img = {mongoLogo} title = "MongoDB"/>
        <SkillCard img = {sqlLogo} title = "MySQL"/>
        {/* <SkillCard/>
        <SkillCard/> */}
        
      </div>
    </div>
  )
}

export default SkillsSection
