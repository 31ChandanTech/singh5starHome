import React, { useState } from "react";
import "./catering.css";
import Button from "../header/Button";

const Cform = ({ styleclass, onCross }) => {

    const [CateringUserData, setCateringUserData] = useState({
        Cfirstname: '',
        Clastname: '',
        Cemail: '',
        Caddress: '',
        Ccity: '',
        Cstate: '',
        Cpincode: '',
        CeventDate: '',
        Ceventtype: '',
        CeventStartTime: '',
        CeventEndTime: '',
        CtotalPeople: '',
        CSpecialRequirements: '',
        CAdditionalInformation: ''
    });

    let Name, value;
    const handleInput = (e) => {
        Name = e.target.name;
        value = e.target.value;

        setCateringUserData({ ...CateringUserData, [Name]: value });
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log({ ...CateringUserData });
        setCateringUserData({
            Cfirstname: '',
            Clastname: '',
            Cemail: '',
            Caddress: '',
            Ccity: '',
            Cstate: '',
            Cpincode: '',
            CeventDate: '',
            Ceventtype: '',
            CeventStartTime: '',
            CeventEndTime: '',
            CtotalPeople: '',
            CSpecialRequirements: '',
            CAdditionalInformation: ''
        });
        alert("Form Successfully submited. We will contact you within 3 working days. ThankYou Sir");
    };

    return (
        <div className={styleclass}>
            <i className="fa-solid fa-xmark Ccross" onClick={onCross}></i>
            <form className="Cform" onSubmit={handleForm}>
                <div className="DisplayFlex">
                    <div className="CinputBox">
                        <label htmlFor="Cfirstname">
                            First Name <span>*</span>
                        </label>
                        <input value={CateringUserData.Cfirstname} onChange={handleInput} type="text" placeholder="First Name" name="Cfirstname" id="Cfirstname" required />
                    </div>
                    <div className="CinputBox">
                        <label htmlFor="Clastname">
                            Last Name <span>*</span>
                        </label>
                        <input value={CateringUserData.Clastname} onChange={handleInput} type="text" placeholder="Last Name" name="Clastname" id="Clastname" required />
                    </div>
                </div>
                <div className="CinputBox">
                    <label htmlFor="Cemail">
                        Email Address <span>*</span>
                    </label>
                    <input value={CateringUserData.Cemail} onChange={handleInput} type="email" placeholder="Email" name="Cemail" id="Cemail" required />
                </div>
                <div className="CinputBox">
                    <label htmlFor="Caddress">
                        Address <span>*</span>
                    </label>
                    <textarea value={CateringUserData.Caddress} onChange={handleInput} name="Caddress" id="Caddress" required></textarea>
                </div>
                <div className="DisplayFlex">
                    <div className="CinputBox">
                        <label htmlFor="Ccity">
                            City <span>*</span>
                        </label>
                        <input value={CateringUserData.Ccity} onChange={handleInput} type="text" placeholder="Your city" name="Ccity" id="Ccity" required />
                    </div>
                    <div className="CinputBox">
                        <label htmlFor="Cstate">
                            State <span>*</span>
                        </label>
                        <input value={CateringUserData.Cstate} onChange={handleInput} type="text" placeholder="Your State" name="Cstate" id="Cstate" required />
                    </div>
                </div>
                <div className="DisplayFlex">
                    <div className="CinputBox">
                        <label htmlFor="Cpincode">
                            Pin-Code <span>*</span>
                        </label>
                        <input value={CateringUserData.Cpincode} onChange={handleInput} type="number" placeholder="Zip Code" name="Cpincode" id="Cpincode" required />
                    </div>
                    <div className="CinputBox">
                        <label htmlFor="CeventDate">
                            Event Date <span>*</span>
                        </label>
                        <input value={CateringUserData.CeventDate} onChange={handleInput} type="date" name="CeventDate" id="CeventDate" required />
                    </div>
                </div>
                <div className="DisplayFlex">
                    <div className="CinputBox">
                        <label htmlFor="Ceventtype">Type of Event <span>*</span></label>
                        <select value={CateringUserData.Ceventtype} onChange={handleInput} name="Ceventtype" id="Ceventtype" required>
                            <option value="#">TYPE OF EVENT</option>
                            <option value="Alumni">Alumni</option>
                            <option value="Bachelor_Bachelorette">Bachelor/Bachelorette</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Cocktail">Cocktail Reception</option>
                            <option value="Corporate">Corporate Lunch</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Fundraiser">Fundraiser</option>
                            <option value="Graduation">Graduation</option>
                            <option value="Holiday">Holiday</option>
                            <option value="Meeting">Meeting/Presentation</option>
                            <option value="Photo">Photo/Film Shoot</option>
                            <option value="Private">Private Dinner</option>
                            <option value="Rehearsal">Rehearsal Dinner</option>
                            <option value="Shower">Shower</option>
                            <option value="Sporting">Sporting Event</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="CinputBox">
                        <label htmlFor="CeventStartTime">Start Time <span>*</span></label>
                        <input value={CateringUserData.CeventStartTime} onChange={handleInput} type="time" name="CeventStartTime" id="CeventStartTime" required />
                    </div>
                </div>
                <div className="DisplayFlex">
                    <div className="CinputBox">
                        <label htmlFor="CeventEndTime">End Time <span>*</span></label>
                        <input value={CateringUserData.CeventEndTime} onChange={handleInput} type="time" name="CeventEndTime" id="CeventEndTime" required />
                    </div>
                    <div className="CinputBox">
                        <label htmlFor="CtotalPeople">
                            Number of People <span>*</span>
                        </label>
                        <input value={CateringUserData.CtotalPeople} onChange={handleInput} type="number" name="CtotalPeople" id="CtotalPeople" required />
                    </div>
                </div>
                <div className="CinputBox">
                    <label htmlFor="CSpecialRequirements">
                        Requests / Special Requirements
                    </label>
                    <textarea value={CateringUserData.CSpecialRequirements} onChange={handleInput} name="CSpecialRequirements" id="CSpecialRequirements"></textarea>
                </div>
                <div className="CinputBox">
                    <label htmlFor="CAdditionalInformation ">
                        Additional Information
                    </label>
                    <textarea value={CateringUserData.CAdditionalInformation} onChange={handleInput} name="CAdditionalInformation" id="CAdditionalInformation"></textarea>
                </div>
                <div className="Cbtn">
                    <Button styleclass="CCbtn" text="SUBMIT" />
                </div>
            </form>
        </div>
    );
};

export default Cform;
