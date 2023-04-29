import React from 'react';
import "./dragbunch.css";

const DragBun = () => {
  const showDate = new Date();

  return (
    <div className='DragBun' data-aos="fade-up">
      <img src="https://images.getbento.com/accounts/3aba79963eaec755ff2b03d837bda6a8/media/images/042223_Drag_Brunch_Flyer_Square_w._Resy.jpg?w=1000&fit=max&auto=compress,format&h=1000" alt="poster" />
      <p className="bunpara">SINGH is proud to host Drag Brunch every other Saturday featuring - our most loved Queen - Malai. <br /> We have two seatings available with entertainment from noon until 2:30pm.</p>
      <p className="joinuspara">Please join us on:</p>
      <p className="showdate"><b>Date:- {showDate.toLocaleDateString()}</b></p>
      <p className="showdate"><b>Date:- {showDate.toLocaleDateString()}</b> - Special Mother's Day Brunch</p>
      <p className="showdate"><b>Date:- {showDate.toLocaleDateString()}</b> - In Support of City Harvest's Share Lunch Fight Hunger</p>
      <p className="showdate"><b>Date:- {showDate.toLocaleDateString()}</b> Pride Weekend Celebration</p>
    </div>
  )
}

export default DragBun;