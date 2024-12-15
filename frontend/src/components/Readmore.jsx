import React from 'react'
import Carousal from './Carosel'
import ProjectDetails from './projectDetails'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './readmore.css'
function Readmore() {
  const location = useLocation();

  
  return (
    <div className='readmore-main'>
      <Navbar/>
    <div className='readmore-conatainer'>
      <h2  className='readmore-proj-title' style={{margin:'15px 0px'}}>{ProjectDetails[location.state.index].title}</h2>
      <div className="readmore-carosel-dis">
      <Carousal index={location.state.index}/>
      <div className='readmore-discription'>
        
        <p>{ProjectDetails[location.state.index].description}</p>
      </div>
      </div>
      <div className='readmore-large-detail'>
       
        <p>{ProjectDetails[location.state.index].description}</p>
      </div>
      

    </div>
    </div>
  )
}

export default Readmore
