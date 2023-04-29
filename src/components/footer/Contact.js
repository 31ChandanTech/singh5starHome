import React from 'react';
import "./footerCom.css";
import Form from './Form';

const Contact = () => {

  return (
    <div className='contact'>
      <h2>CONTACT US</h2>
      <Form name={{ Name: "Fname", email: "Femail", number: "Fnumber", query: "Fquery", message: "Fmessage" }} placehold={{ Name: "Name", Email: "Email", PhoneNumber: "Phone Number", Message: "Your Message" }} CVtext="Resumé" queryText="Reason for inquiry" messageText="Your Message" selectOption={[{ text: "Choose your Query", value: "" }, { text: "General inquiry", value: "General" }, { text: "Press inquiry", value: "Press" }]} btnText="SEND" togle="hideCv" />
    </div>
  )
}

export default Contact