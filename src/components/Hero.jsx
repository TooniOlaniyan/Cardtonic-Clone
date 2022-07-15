import React from 'react'
import appstore from '../assets/Svgs/appstore.svg'
import googleplay from '../assets/Svgs/googleplay.svg'
import firstHomeImage from '../assets/Svgs/firstHomeImage.svg'
import sellLine from '../assets/Svgs/sellLine.svg'
import Card from '../shared/Card'


function Hero() {
  return (
    <main className="heroContainer">
      <div className="textSide">
        <div className="relative">
          <span className="sell">Sell </span>
          <span className="gift">gift cards </span>
          <span className="and">&</span>
          <br />
          <span className="earn"> earn reward 💰</span>
          <img  className="blueMark" src={sellLine} alt="" />
        </div>
        <div className="smallerText">
          <p>
            Exchange unused gift cards for cash at amazing rates in split
            seconds.
          </p>
        </div>
        <div className="socialCards">
            <img src={googleplay} alt="" />
            <img src={appstore} alt="" />

        </div>
      </div>

      <div className='firstHomeImage'>
        <img width="500px" height="500px" src={firstHomeImage} alt="" />
      </div>
      

    </main>
    
    
    
  );
}

export default Hero