import React from 'react';
import "./footerCom.css";
import Form from "./Form";

const Jobs = () => {
  return (
    <div className='jobs'>
      <h2>WORK WITH US</h2>
      <Form name={{ name: "Fname", email: "Femail", number: "Fnumber", query: "Fquery", message: "Fmessage", Cvtext: "Resume" }} placehold={{ Name: "Name", Email: "Email", PhoneNumber: "Phone Number", Message: "Cover Letter" }} queryText="Position Seeking" messageText="Cover Letter" selectOption={[{ text: "Server", value: "Server" }, { text: "Bartender", value: "Bartender" }, { text: "Runner/busser", value: "Runner/busser" }, { text: "Host/hostess", value: "Host" }, { text: "Line Cook", value: "LineCook" }, { text: "Prep Cook", value: "PrepCook" }, { text: "Dishwasher", value: "Dishwasher" }, { text: "Manager", value: "Manager" }]} btnText="APPLY" togle="inputBox" />
    </div>
  )
}

export default Jobs