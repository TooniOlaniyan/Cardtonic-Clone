import React from 'react'
import whiteLogo from '../assets/Svgs/whiteLogo.svg'
import {ReactComponent as Google} from '../assets/Svgs/googleplay.svg'
import {ReactComponent as Apple} from '../assets/Svgs/appstore.svg'

function Footer() {
  return (
    <div className="footerMain">
      <footer className="footer">
        <div className="footerContentContainer">
          <div className="footerFirstFLex">
            <img src={whiteLogo} alt="" />
            <p>
              Bridging the gap between individuals who need liquid cash and
              businesses who need discounted gift cards as a payment
              alternative. Cardtonic is available for Web, iPhone, and Android
              users.
            </p>
            <span className="footerInLine"></span>
            <div className="phoneNumber">
              <p>+234 (0) 1 343 0626</p>
              <p>+234 (0) 706 050 2770</p>
            </div>
            <div className="cardtonicSocial">
              <p>support@cardtonic.com</p>
              <div className="socialMedia">
                <span>
                  <a href="/">IG </a>
                </span>
                <span>
                  <a href="/">FB </a>
                </span>
                <span>
                  <a href="/">TW </a>
                </span>
              </div>
            </div>
            <div className="footerSocialCard">
              <Google fill="white" />

              <Apple fill="red" />
            </div>
          </div>
          <span className="footerInLineOne"></span>
          <div className="footerVerticalLine"></div>

          <div className="footerLinks">
            <div className="customer">
              <h3>For The Customer</h3>
              <p>Download On Android</p>
              <p>Download on iPhone</p>
              <p>Get Reward Points</p>
              <p>Taste The Tonic</p>
              <p>Check Our Rates</p>
              <p>Talk To Us</p>
              <p>Visit Help Center</p>
            </div>
            <span className="footerInLine"></span>
            <div className="business">
              <h3>For The Business</h3>
              <p>Up Your Skill</p>
              <p>Become A Partner</p>
              <p>#CTGivesBack</p>
              <p>Work With Us</p>
              <p>Read The Blog</p>
              <p>Read Our Terms</p>
              <p>Our Privacy Policy</p>
            </div>
          </div>
        </div>
        <div>
        </div>
          <span className="footerLine"></span>
        <p className="copyright">© 2022 Cardtonic. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer