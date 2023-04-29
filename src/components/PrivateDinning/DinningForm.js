import React, { useState } from "react";
import Button from "../header/Button";
import "./priDin.css";

const DinningForm = ({ styleclass, onCross }) => {

  const [PrivateDinningUserData, setPrivateDinningUserData] = useState({
    Dfirstname: '',
    Dlastname: '',
    Demail: '',
    Dphone: '',
    Dselect: '',
    Dcompany: '',
    DeventType: '',
    DeventDate: '',
    DeventStartTime: '',
    DeventEndTime: '',
    DtotalPeople: '',
    DadditionalInfo: '',
    DhowYouKnowUs: ''
  });

  let Name, value;
  const HandleInput = (e) => {
    Name = e.target.name;
    value = e.target.value;

    setPrivateDinningUserData({ ...PrivateDinningUserData, [Name]: value });
  }

  const HandleForm = (e) => {
    e.preventDefault();
    console.log({ ...PrivateDinningUserData });
    setPrivateDinningUserData({
      Dfirstname: '',
      Dlastname: '',
      Demail: '',
      Dphone: '',
      Dselect: '',
      Dcompany: '',
      DeventType: '',
      DeventDate: '',
      DeventStartTime: '',
      DeventEndTime: '',
      DtotalPeople: '',
      DadditionalInfo: '',
      DhowYouKnowUs: ''
    });
    alert("Form Successfully submited. We will contact you within 3 working days. ThankYou Sir");
  }
  return (
    <div className={styleclass}>
      <i className="fa-solid fa-xmark Dcross" onClick={onCross}></i>
      <form className="Dform" onSubmit={HandleForm}>
        <h2 className="DformTitle">YOUR CONTACT INFORMATION</h2>
        <div className="DinputBox">
          <label htmlFor="Dfirstname">
            First Name <span>*</span>
          </label>
          <input value={PrivateDinningUserData.Dfirstname} onChange={HandleInput} type="text" placeholder="First Name" name="Dfirstname" id="Dfirstname" required />
        </div>
        <div className="DinputBox">
          <label htmlFor="Dlastname">
            Last Name <span>*</span>
          </label>
          <input value={PrivateDinningUserData.Dlastname} onChange={HandleInput} type="text" placeholder="Last Name" name="Dlastname" id="Dlastname" required />
        </div>
        <div className="DinputBox">
          <label htmlFor="Demail">
            Email Address <span>*</span>
          </label>
          <input value={PrivateDinningUserData.Demail} onChange={HandleInput} type="email" placeholder="Email" name="Demail" id="Demail" required />
        </div>
        <div className="DinputBox">
          <label htmlFor="Dphone">
            Phone Number <span>*</span>
          </label>
          <input value={PrivateDinningUserData.Dphone} onChange={HandleInput} type="number" placeholder="Contact Number" name="Dphone" id="Dphone" required />
        </div>
        <div className="DinputBox">
          <label htmlFor="Dselect">How would you prefer to be contacted?</label>
          <select value={PrivateDinningUserData.Dselect} onChange={HandleInput} name="Dselect" id="Dselect">
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="txt">Text</option>
          </select>
        </div>
        <div className="DinputBox">
          <label htmlFor="Dcompany">Company</label>
          <input value={PrivateDinningUserData.Dcompany} onChange={HandleInput} type="text" placeholder="Your Company Name" name="Dcompany" id="Dcompany" />
        </div>
        <h2 className="DformTitle">YOUR EVENT DETAILS</h2>
        <div className="DinputBox">
          <label htmlFor="DeventType">
            Nature of this Event(e.g., Birthday Party or Business Dinner)
          </label>
          <input value={PrivateDinningUserData.DeventType} onChange={HandleInput} type="text" placeholder="Type of Event" name="DeventType" id="DeventType" />
        </div>
        <div className="DinputBox">
          <label htmlFor="DeventDate">
            Event Date <span>*</span>
          </label>
          <input value={PrivateDinningUserData.DeventDate} onChange={HandleInput} type="date" name="DeventDate" id="DeventDate" required />
        </div>
        <div className="totaltime">
          <div className="DinputBox">
            <label htmlFor="DeventStartTime">Start Time</label>
            <input value={PrivateDinningUserData.DeventStartTime} onChange={HandleInput} type="time" name="DeventStartTime" id="DeventStartTime" />
          </div>
          <div className="DinputBox">
            <label htmlFor="DeventEndTime">End Time</label>
            <input value={PrivateDinningUserData.DeventEndTime} onChange={HandleInput} type="time" name="DeventEndTime" id="DeventEndTime" />
          </div>
        </div>
        <div className="DinputBox">
          <label htmlFor="DtotalPeople">
            Number of People <span>*</span>
          </label>
          <input value={PrivateDinningUserData.DtotalPeople} onChange={HandleInput} type="number" name="DtotalPeople" id="DtotalPeople" required />
        </div>
        <div className="DinputBox">
          <label htmlFor="DadditionalInfo">
            Is there any additional information you would like to add?
          </label>
          <textarea value={PrivateDinningUserData.DadditionalInfo} onChange={HandleInput} name="DadditionalInfo" id="DadditionalInfo"></textarea>
        </div>
        <div className="DinputBox">
          <label htmlFor="DhowYouKnowUs">How did you hear about us?</label>
          <select value={PrivateDinningUserData.DhowYouKnowUs} onChange={HandleInput} name="DhowYouKnowUs" id="DhowYouKnowUs">
            <option value="null">Select an option</option>
            <option value="EventUp">Event Up</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Tripleseat">Veneus by Tripleseat</option>
            <option value="SEngine">Search Engine</option>
            <option value="Email">Email</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="Dbtn">
          <Button styleclass="PDbtn" text="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

export default DinningForm;
