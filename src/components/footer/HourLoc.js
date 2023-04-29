import React from 'react';
import "./footerCom.css";

const HourLoc = () => {
  return (
    <div className='HourLoc'>
      <h2>HOURS & LOCATION</h2>
      <p>Singh Hotel <br /> 17B Ramesh Mitra Rd, <br /> Paddapukur, Bhowanipore, Kolkata, <br /> West Bengal 700025 <br /> (+91) 8282958489</p>
      <p><b>Dinner</b><br />Served Nightly <br />5—10PM</p>
      <p><b>Golden Hour</b><br />Monday through Friday <br />5—6PM</p>
      <p><b>Brunch</b><br />Saturday & Sunday<br />11AM—2:30PM</p>
      <p><a rel="noreferrer" href="https://www.ubereats.com/store/sona/9R5urJYgXBeVFbyV74ZeNQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkVhc3QlMjAyMHRoJTIwU3RyZWV0JTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyRWh4RklESXdkR2dnVTNRc0lFNWxkeUJaYjNKckxDQk9XU3dnVlZOQklpNHFMQW9VQ2hJSkE4aFNvUXBad29rUmpkeTBKd3dXZ29VU0ZBb1NDVHNJUDlPbFQ4S0pFV0wtZC1FR2p3dkklMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDAuNzM2MDIyOCUyQyUyMmxvbmdpdHVkZSUyMiUzQS03My45ODIyNzM4JTdE&ps=1" target='_blank'>Delivery</a> <br /> 5-10PM</p>
      <div className="mapcont">
      <iframe title='Singh' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117930.57394487008!2d88.26540803906249!3d22.529291399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02777105e7a1e1%3A0x8cd9681ebfc9c7ce!2sSingh%20Hotel!5e0!3m2!1sen!2sin!4v1682329318049!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default HourLoc