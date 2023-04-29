import React from 'react';
import "./HeroSection.css";

const HeroSection = () => {
    let year = new Date();
  return (
    <div className='heroSection' data-aos="fade-up">
        <p className="text">INDIAN FOOD GUIDE {year.getFullYear()}</p>
    </div>
  )
}

export default HeroSection;