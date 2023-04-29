import React, { useState } from 'react';
import Image from "./privateBanner.png";
import "./priDin.css";
import Button from '../header/Button';
import DinningForm from './DinningForm';

const PrivateDinning = () => {
  const [toggle, setToggle] = useState('Dinning_form_Dnone');

  const DformPopUp = () => {
    setToggle('Dinning_form');
    document.body.style.overflowY = "hidden";
  };
  const closePopUp = () => {
    setToggle('Dinning_form_Dnone');
    document.body.style.overflowY = "scroll";
  };


  return (
    <div className='privatedinning'>
      <div className="PDBanner" data-aos="fade-up">
        <img src={Image} alt="banner" />
      </div>
      <div className="restroPic" data-aos="fade-down">
        <img src="https://images.getbento.com/accounts/3aba79963eaec755ff2b03d837bda6a8/media/images/Mimis-at-SINGH 5'Star-Private-Events-NYC_01.png?w=1000&fit=max&auto=compress,format&h=1000" alt="Imag" />
      </div>
      <p className="PDpara">Mimi's at SINGH 5'Star is our exquisite private dining room.</p>
      <p className="PDpara">At Mimi’s, meals are long and time tends to stand still.</p>
      <p className="PDpara">Hosting up to 26 seated guests and 45 for standing cocktails.</p>
      <Button styleclass="btnPD" onClicked={DformPopUp} text="INQUIRE" />

      <DinningForm styleclass={toggle} onCross={closePopUp} />
    </div>
  )
}

export default PrivateDinning;