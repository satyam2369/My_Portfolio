import React from 'react';
import './ProjectsSection.css';
import ProjectCard from './ProjectCard';
import ProjectDetails from './projectDetails'; // Import the array

function ProjectsSection() {
  return (
    <div className='proj-sec-main'>
      <h1 className='proj-sec-heading animate'>Projects</h1>
      <div className='proj-sec-container'>
        {ProjectDetails.map((project, index) => (
          
          <ProjectCard
            key={index}
            idx={index}
            title={project.title}
            link={project.link}
            dis={project.description}
            img={project.img}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
