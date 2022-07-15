import React from 'react'
import Button from '../shared/Button';
import partner from '../assets/Svgs/partner.svg'
import partnerMobile from '../assets/Svgs/partnerMobile.svg'
import sellLine from '../assets/Svgs/sellLine.svg'

function Hero2() {
  return (
    <>
      <div className="becomePartnerContainer">
        <div className="testFlex">
          <div className="textFlex">
            <p>
              Are you willing to fly into the global gift card buzz and and
              giftcardize your business by taking advantage of these fast-rising
              niche? Then, you might be interested in our partnership program.
            </p>
            <span className="line"></span>
            <div>
              <h1>Become a partner</h1>
              <img className="hero2Mark" src={sellLine} alt="" />
            </div>
          </div>

          {/* <div className="heroImage2">
          <img style={{marginTop:'1rem'}} width={870} height={405} src={partner} alt="" />
        </div> */}

          <picture>
            <source media="(min-width:800px)" srcSet={partner} />
            <source
              width={325}
              media="(max-width:500px)"
              srcSet={partnerMobile}
            />
            <img src={partner} alt={"Partners"} />
          </picture>
        </div>

        <div className="heroFooter">
          <Button> Apply Now</Button>
          <p style={{ color: "red", fontSize: "12px", textAlign: "center" }}>
            Limited Selection Applies
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero2