import React from 'react';

const ArtPoster = ({key ,sorce ,posterSize ,posterName ,posterYear ,posterDiscription}) => {
  return (
    <div className='artposter' data-aos='fade-up' key={key}>
        <div className="left">
            <div className="image">
            <img src={sorce} alt={posterName} />
            </div>
            <p>{posterSize}</p>
        </div>
        <div className="right">
            <h2>{posterName}</h2>
            <p className='years'>{posterYear}</p>
            <p>{posterDiscription}</p>
        </div>
    </div>
  )
}

export default ArtPoster;