import React from 'react'
import './projects.css';
import proj1 from '../Assets/proj_1.png'
import ProjectCard from './ProjectCard';
import Navbar from './Navbar';
function Projects() {
  
    
  return (
    <div className='proj_main'>
      <Navbar/>
    <div className='proj_container'>
      {/* <h1 className='my_proj'>My Projects</h1> */}
      <ProjectCard title="Assesment Pro" link= "https://github.com/satyam2369/assessment_portal" dis ="An online platform for creating and taking assessments, developed using React.js for the frontend, MySQL for the database, and Spring Boot for the backend, offering a seamless experience for users and administrators." img ={proj1} techStack= {["ReactJS","Spring Boot", "MySQL"]}/>
      <ProjectCard title="Assesment Pro" dis ="An online platform for creating and taking assessments, developed using React.js for the frontend, MySQL for the database, and Spring Boot for the backend, offering a seamless experience for users and administrators." img ={proj1} techStack= {["ReactJS","Spring Boot", "MySQL"]}/>
      <ProjectCard title="Assesment Pro" dis ="An online platform for creating and taking assessments, developed using React.js for the frontend, MySQL for the database, and Spring Boot for the backend, offering a seamless experience for users and administrators." img ={proj1} techStack= {["ReactJS","Spring Boot", "MySQL"]}/>
      
    </div>
    </div>
  )
}

export default Projects
