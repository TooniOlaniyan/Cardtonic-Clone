import React from 'react'
import { useState } from "react";
import Card from '../shared/Card'
import Button from '../shared/Button'
import payment from '../assets/Svgs/payment.svg'
import crossPlatformIcon from '../assets/Svgs/crossPlatformIcon.svg'
import trustedIcon from '../assets/Svgs/trustedIcon.svg'
import {Link } from 'react-router-dom'


function About() {
  
  return (
    <>
      <div className="aboutBox">
        <div className="flexCard">
          <Card reverse={false}>
            <img
              style={{ marginBottom: "0.5rem" }}
              width="32px"
              src={payment}
              alt=""
            />
            <h3
              style={{
                // color: "#fff",
                fontSize: "17px",
                marginBottom: "0.5rem",
              }}
            >
              Instant Payment
            </h3>
            <p
              style={{
                color: "#7d8aa2",
                fontSize: "16px",
                textAlign: "start",
              }}
            >
              Using state-of-the-art payment procedures, you are guaranteed to
              get your payment sent to your account within minutes.
            </p>
          </Card>

          <Card
            
          >
            <img
              style={{ marginBottom: "0.5rem" }}
              width="32px"
              src={crossPlatformIcon}
              alt=""
            />
            <h3
              style={{
                
          
                fontSize: "17px",
                marginBottom: "0.5rem",
              }}
            >
              Cross-Platform <br /> Availability
            </h3>
            <p
              style={{
                color: "#7d8aa2",
                fontSize: "15px",
                textAlign: "start",
              }}
            >
              Sell any gift card, anywhere, anytime, using our modern gift card
              trading application available on Android, iOS and web browser.
            </p>
          </Card>

          <Card>
            <img
              style={{ marginBottom: "0.5rem" }}
              width="32px"
              src={trustedIcon}
              alt=""
            />
            <h3
              style={{
               
                fontSize: "17px",
                marginBottom: "0.5rem",
              }}
            >
              Trusted And Secure
            </h3>
            <p
              style={{
                color: "#7d8aa2",
                fontSize: "16px",
                textAlign: "start",
              }}
            >
              Trade with high confidence, as we assure you the highest level of
              encryption and professionally audited exchange system.
            </p>
          </Card>
        </div>
      </div>
      <Link to="/register">
        <div className="register">
          <Button reverse={false}>Register Now</Button>
        </div>
      </Link>
    </>
  );
}

export default About