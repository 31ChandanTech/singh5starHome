import React from 'react';
import "./Welcome.css";
import Button from '../header/Button';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

  const Navigate = useNavigate();
  const NavigatePage = () => {
    Navigate("/menu");
  }
  return (
    <div className='welcome_sect' data-aos="fade-up">
      <h2>WELCOME</h2>
      <p>SINGH creatively modernizes the age-old flavors of India.</p>
      <p>Our cuisine is proudly inspired by India, with a distinctly New York touch — served nightly in a space that is as elegant as it is lively.</p>
      <p>We look forward to welcoming you in.</p>
      <Button styleclass="btn" onClicked={NavigatePage} text="VIEW MENU" />
    </div>
  )
}

export default Welcome;