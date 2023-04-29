import React, { useState } from 'react';
import Button from '../header/Button';

const Form = ({ name, placehold, queryText, messageText, selectOption, btnText, togle }) => {

  const { Name, email, number, query, message, Cvtext } = name;

  const [value, setValue] = useState({
    Fname: '', Femail: '', Fnumber: '', Fquery: '', Fmessage: '', Resume: ''
  });
  const [showValue, setShowValue] = useState({});

  let nname, Value;
  const handleInputs = (e) => {
    nname = e.target.name;
    Value = e.target.value;

    setValue({ ...value, [nname]: Value });
    setShowValue({ ...value });
  }

  const handleForm = (e) => {
    e.preventDefault();
    setValue({
      Fname: '', Femail: '', Fnumber: '', Fquery: '', Fmessage: '', Resume: ''
    });
    alert("Submited Successfully");
    console.log({ ...showValue });
  }

  return (
    <form className='form' onSubmit={handleForm}>
      <div className="inputBox">
        <label htmlFor={Name}>NAME <i>-Required</i></label>
        <input value={value.Fname} onChange={handleInputs} type="text" name={Name} id={Name} placeholder={placehold.Name} required />
      </div>
      <div className="inputBox">
        <label htmlFor={email}>EMAIL <i>-Required</i></label>
        <input value={value.Femail} onChange={handleInputs} type="text" name={email} id={email} placeholder={placehold.Email} required />
      </div>
      <div className="inputBox">
        <label htmlFor={number}>Phone Number <i>-Required</i></label>
        <input value={value.Fnumber} onChange={handleInputs} type="text" name={number} id={number} placeholder={placehold.PhoneNumber} required />
      </div>
      <div className="inputBox">
        <label htmlFor={query}>{queryText} <i>-Optional</i></label>
        <select value={value.Fquery} onChange={handleInputs} name={query} id={query}>
          {
            selectOption.map((elem, index) => {
              return <option key={index} value={elem.value}>{elem.text}</option>
            })
          }
        </select>
      </div>
      <div className="inputBox">
        <label htmlFor={message}>{messageText} <i>-Required</i></label>
        <textarea value={value.Fmessage} onChange={handleInputs} name={message} id={message} placeholder={placehold.Message} required></textarea>
      </div>
      <div className={togle}>
        <label htmlFor={Cvtext}>{Cvtext} <i>-Required</i></label>
        <input value={value.Resume} onChange={handleInputs} type="file" name={Cvtext} id={Cvtext} />
      </div>
      <div className="submitBtn">
        <Button styleclass="btn" text={btnText} />
      </div>
    </form>
  )
}

export default Form;