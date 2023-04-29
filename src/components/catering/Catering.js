import React, { useState } from 'react';
import Button from '../header/Button';
import "./catering.css";
import Image1 from "./1.jpg";
import Image2 from "./2.jpg";
import Image3 from "./3.jpg";
import Image4 from "./4.jpg";
import Image5 from "./5.jpg";
import Cform from './Cform';

const Catering = () => {
    const ImageArray = [`${Image1}`, `${Image2}`, `${Image3}`, `${Image4}`, `${Image5}`];
    const [Imag, setImag] = useState(ImageArray[0]);
    const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState('catering_form_Cnone');
    const onForw = () => {
        if (counter > 3) {
            setImag(ImageArray[0])
            setCounter(0);
        } else {
            setCounter(counter + 1)
            setImag(ImageArray[counter + 1])
        }
    }
    const onBack = () => {
        if (counter <= 0) {
            setImag(ImageArray[4])
            setCounter(4);
        } else {
            setCounter(counter - 1)
            setImag(ImageArray[counter - 1])
        }
    }

    const CformPopUp = () => {
        setToggle('catering_form');
        document.body.style.overflowY = "hidden";
    };
    const closePopUp = () => {
        setToggle('catering_form_Cnone');
        document.body.style.overflowY = "scroll";
    };

    return (
        <div className='catering' data-aos="fade-down">
            <h2>CATERING BY SINGH 5'STAR</h2>
            <p>SINGH 5'Star is available to orchestrate a wide range of solutions for your special event needs. Whether it is an intimate social gathering in your home, corporate team dinner or a destination wedding, we bring you the signature SINGH 5'Star themed menus and culinary experiences specially crafted to suit each occasion.
            </p>
            <Button styleclass="btn" onClicked={CformPopUp} text="CONTACT US TO PLAN YOUR NEXT EVENT" />
            <div className="imageSlider" data-aos="fade-up">
                <img src={Imag} alt="interior" />
                <i onClick={onForw} className="fa-solid fa-chevron-right forward"></i>
                <i onClick={onBack} className="fa-solid fa-chevron-left backward"></i>
            </div>

            <Cform styleclass={toggle} onCross={closePopUp} />
        </div>
    )
}

export default Catering;