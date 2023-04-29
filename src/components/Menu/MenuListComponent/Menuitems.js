import React from 'react';
import "./Menuitems.css";


const Menuitems = ({ top, listitems, bottom }) => {
  const IdTime = new Date().getTime().toString();
  return (
    <div className='menu_items_container'>
      <div className='outer_border'>
        <div className='inner_border'>
          <p className='para'>{top}</p>
          {
            listitems.map(elem => {
              return (
                <>
                  <h2 key={elem.id + IdTime} className='listitemtitle'>{elem.title}</h2>
                  {elem.list.map((elem) => <p key={elem + IdTime} className='para'>{elem}</p>)}
                </>
              )
            })
          }
          <p className='para'>{bottom}</p>
        </div>
      </div>
    </div>
  )
}

export default Menuitems;