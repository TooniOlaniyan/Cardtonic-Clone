import React from 'react'
import Button from '../shared/Button';
import googleplay from '../assets/Svgs/googleplay.svg'
import appstore from '../assets/Svgs/appstore.svg'
import Trade from '../assets/jpgs/Trade.png' 
import TradePhone from '../assets/jpgs/TradePhone.png' 
import underMark from '../assets/Svgs/underMark.svg'

function Download() {
  return (
    <>
      <div className="downloadCenterContainer">
        <div className="downloadCenter">
          <div className="downloadCard">
            <h1>
              Download <br /> Cardtonic App
            </h1>
            <span className="downloadLine"></span>
            <img className="downloadMark" src={underMark} alt="" />

            <div className="downloadSocialCard">
              <img src={googleplay} alt="" />
              <img src={appstore} alt="" />
            </div>
          </div>

          <div className="downloadText">
            <p>
              Experience the best of Cardtonic as you download <br /> our mobile
              application to your phone or tablet. <br /> Available for iOS and
              Android operating systems.
            </p>
            <Button>Register Now</Button>
          </div>
        </div>
      
          <picture className="phoneImage">
            <source
              className="tradeSmallImg"
              width='300px'
              height='300px'
              media="(min-width:800px)"
              srcSet={Trade}
            />
            <source
              width='150px'
              height='150px'
              media="(max-width:600px)"
              srcSet={TradePhone}
            />
            <img src={TradePhone} alt={"Partners"} />
          </picture>
          {/* <img width={332} height={274} src={Trade} alt="" /> */}
        
      </div>
    </>
  );
}

export default Download