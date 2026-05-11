import React from 'react'
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ban from "../assets/ban.png";
import Container from './Container';

const Slider = SliderModule.default;

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <Container>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className='w-full h-90' src={ban} alt="" />
        </div>
        <div>
          <img className='w-full h-90' src={ban} alt="" />
        </div>
        <div>
          <img className='w-full h-90' src={ban} alt="" />
        </div>
        <div>
          <img className='w-full h-90' src={ban} alt="" />
        </div>
        <div>
          <img className='w-full h-90' src={ban} alt="" />
        </div>
        
      </Slider>
    </div>
    </Container>
    </div>
  )
}

export default Banner
