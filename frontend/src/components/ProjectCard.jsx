import React from 'react'
import './ProjectCard.css'
import { Link, useLocation,useNavigate} from 'react-router-dom';


function ProjectCard(prop) {
  const navigator = useNavigate();
  const handleReadmore = () =>{
    // console.log("hisdsaia "+prop.idx)
    navigator("/readmore", {state:{index:prop.idx}})
  }
  return (
    <div className='Project-Card-Main animate'>
      <img className='Proj-Card-Img' src={prop.img} alt="project Image" />
      <div className='Tech-Stack'>
          {prop.techStack.map((tech, index) => (
            <span className='Tech' key={index}>{tech}</span>
          ))}
      </div>
      <p className='Proj-Card-Title'>{prop.title}</p>
      <p className='Proj-Card-Discription'>{prop.dis.substring(0,200)+"..."}</p>
      <div className="project-card-button-container">
      <button onClick={handleReadmore} className='project-card-readmore'>Read More</button>
      <button className='project-card-readmore visit'>Visit</button>
      </div>
    </div>
  )
}

export default ProjectCard
