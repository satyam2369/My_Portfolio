import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProjectDetails from './projectDetails';
import './carosel.css'



const Carousal = (prop) => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: false, 
  };
  
  const images = ProjectDetails[prop.index].images;

  

  return (
    <div className='carosel-main' style={{ width: '70%', margin: 'auto', borderRadius:'10px' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img className='carosel-img' src={image} alt="" />
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
