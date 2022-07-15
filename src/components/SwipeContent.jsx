import React from 'react'

function Swiper({heading , details , bottomImage}) {
  return (
    <div className="swiperContent">
      <div className='swiperBox'>
        <div className="heading">
          <h3>{heading}</h3>
        </div>
        <div className="details">
          <p>{details}</p>
        </div>
        <div className="bottom">
          <img className='bottomImg' src={bottomImage} />
        </div>
      </div>
    </div>
  );
}

export default Swiper