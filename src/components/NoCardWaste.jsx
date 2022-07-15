import React from 'react'
import underMark from '../assets/Svgs/underMark.svg'
import Slider from './Slider';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);


function NoCardWaste() {
  return (
    <>
      <div className="noWaste">
        <div className="nowasteContainer">
          <div className="noWastageContainer">
            <div className="noWastage">
              <p className="toGift">
                <span className="weSay">We Say 'NO'</span>
                <div className="underLine">
                  <img width="220rem" src={underMark} alt="" />
                </div>
                To Gift Card  Wastage!
              </p>
            </div>

            <div className="tallLine"></div>

            <article className="aboutWaste">
              <p>
                About $3 billion worth of gift cards were unused last year. This
                means a lot of people get hold of gift cards they never need, or
                never use up the balance of a gift card, which is wasteful.
                Until recently, that was a major problem, which is where
                Cardtonic steps in as the knight in shining armor.
              </p>
              <p>
                Cardtonic also allows users to <br />
                <a href="/">
                  <span className="sellCard">sell gift cards in Ghana </span>
                </a>
                and Nigeria with instant payment settlement. With this
                innovative provision, gift cards will never go to waste, even
                when they cannot be used in certain areas of the world, they can
                be sold at the best possible gift card rates.
              </p>
              <p>
                With Cardtonic, you can trade gift cards including but not
                limited to iTunes, Amazon, Steam Wallet, Google Play, Apple
                Store, eBay, Walmart, Sephora, OneVanilla, Nordstrom, Target,
                JCPenney, Best Buy, Nike, Hotels.com, Macy's, Gamestop,
                Xbox,Vanilla, G2A, American Express (AMEX), OffGamers, Foot
                Locker,Visa, Play Station and others.
              </p>
            </article>
          </div>
          <Slider />
          
        </div>
      </div>
    </>
  );
}

export default NoCardWaste