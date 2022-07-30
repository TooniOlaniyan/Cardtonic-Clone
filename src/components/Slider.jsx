import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation,Pagination, Scrollbar, A11y } from "swiper";
import swiperCardOne from '../assets/Svgs/swiperCardOne.svg'
import swiperCardTwo from '../assets/Svgs/swiperCardTwo.svg'
import swiperCardThree from '../assets/Svgs/swiperCardThree.svg'
import swiperCardFour from '../assets/Svgs/swiperCardFour.svg'
import swiperCardFive from '../assets/Svgs/swiperCardFive.svg'
import swiperCardSix from '../assets/Svgs/swiperCardSix.svg'
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwipeContent from './SwipeContent'


import swiperPrev from '../assets/Svgs/swiperPrev.svg'
import swiperNext from '../assets/Svgs/swiperNext.svg'


SwiperCore.use([ Navigation , Pagination,Scrollbar , A11y])

function Slider() {
  

  return (
    <div>
      <div className="swiperContainer">
        <div className=".swiper-custom-navigation swiper-custom-navigation-prev backNavigate">
          <img className='backward' src={swiperPrev} alt="prev" />
        </div>
        <div className="swiper-pagination"></div>
        <Swiper
          className="swiperContent"
          navigation={{
            prevEl: ".swiper-custom-navigation-prev",
            nextEl: ".swiper-custom-navigation-next",
          }}
          spaceBetween={3}
          slidesPerView={1}
          pagination={true}
          
        >
          <SwiperSlide className='swiper'>
            <SwipeContent
              heading="Download the App"
              details="Download our mobile application or register on our website to start trading gift cards easily as bosses do."
              bottomImage={swiperCardOne}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipeContent
              heading="Login or Register"
              details="Log in and get familiar with the three-step gift card exchange process that takes only a few minutes to complete."
              bottomImage={swiperCardTwo}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipeContent
              heading="Friendly Rates 🤙"
              details="Worry not about rates, we offer the best payouts for your assets based on the current average market prices."
              bottomImage={swiperCardThree}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipeContent
              heading="Simplified User Interface"
              details="Our platform is built with your best interest at heart, helping you sell gift cards using the simplest user interface."
              bottomImage={swiperCardFour}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipeContent
              heading="Quick Payments"
              details="Our payment system is amazingly coherent. You get your money almost instantly, no fees attached, no limits."
              bottomImage={swiperCardFive}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipeContent
              heading="All we do is Reply"
              details="Have a question? Our FAQ page is a whole knowledge base. Our support team is also available via live chat."
              bottomImage={swiperCardSix}
            />
          </SwiperSlide>
        </Swiper>
        <div className=".swiper-custom-navigation swiper-custom-navigation-next frontNavigate">
          <img className='forward' src={swiperNext} alt="next" />
        </div>
      </div>
    </div>
  );
}

export default Slider