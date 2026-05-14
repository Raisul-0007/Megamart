import React, { useContext } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Data} from "./ApiData"
import SliderModule from "react-slick";
import Container from './Container';

const Slider = SliderModule.default;

const Best = () => {
    let {info, loading} = useContext(Data)
  
  let discountPrice = (info.price / 100) * info.discountPercentage;
    let mainPrice = info.price - discountPrice

    const settings = {
    infinite: true,
    speed: 500,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  if(loading){
    return <div className="">Loading</div>
  }
  return (
    <div className='py-20'>
      <Container>
        <div className="py-8">
            <h2 className='text-5xl font-semibold '>Best Selling Product</h2>
        </div>
      <div className="">
        <Slider {...settings}>
        {info?.map((item)=>(
        <div key={item.id} className='w-1/5'>
          <div className="rounded-3xl  bg-white mx-3">
            <div className="bg-[#F5F5F5] w-full rounded-t-3xl border-[#F5F5F5] rounded-">
            <img className=' w-full h-50' src={item.thumbnail} alt={item.id} />
          </div>
          <div className="px-4 py-2">
            <div className="py-1">
                <h4>{item.title.slice(0,15)}</h4>
            <div className="py-1">
                <p>${item.price}</p>
            </div>
            </div>
            <div className="  border-t border-[#76767627]">
            {((item.price / 100) * item.discountPercentage).toFixed(0) != 0 ?
            (<h6 className='text-[#2e9f47] font-semibold'>
            Save ${((item.price / 100) * item.discountPercentage).toFixed(0)}
            </h6>)
            :
            (<div className="">
                <h6 className='text-[#2e9f47] font-semibold'>No Discount</h6>
            </div>)
            }
            </div>
          </div>
          </div>
        </div>
        ))}
      </Slider>
      </div>
      </Container>
    </div>
  )
}

export default Best
