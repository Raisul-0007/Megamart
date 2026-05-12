import React from 'react'
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ban from "../assets/ban.png";

const Slider = SliderModule.default;

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };




  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className='w-full lg:h-120' src={ban} alt="" />
        </div>
        <div>
          <img className='w-full lg:h-120' src={ban} alt="" />
        </div>
        <div>
          <img className='w-full lg:h-120' src={ban} alt="" />
        </div>
        <div>
          <img className='w-full lg:h-120' src={ban} alt="" />
        </div>
        <div>
          <img className='w-full lg:h-120' src={ban} alt="" />
        </div>
        
      </Slider>
    </div>
  )
}

export default Banner
