import React, { useContext } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Data} from "./ApiData"
import SliderModule from "react-slick";
import Container from './Container';

const Slider = SliderModule.default;

const Best = () => {
    let {info, loading} = useContext(Data)

    const settings = {
    infinite: true,
    speed: 500,
    infinite: true,
    speed: 500,
    autoplaySpeed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
  };

  if(loading){
    return <div className="">Loading</div>
  }
  return (
    <div className='py-20'>
      <Container>
        <div className="pb-15">
            <h2 className='text-5xl font-semibold '>Best Selling Product</h2>
        </div>
      <div className="">
        <Slider {...settings}>
        {info?.map((item)=>(

        <div key={item.id}  className=''>
          <div className="rounded-3xl  bg-white mx-3">
            <div className="bg-[#F5F5F5] w-full rounded-t-3xl border-[#F5F5F5] relative">
            <img className=' w-full h-50' src={item.thumbnail} alt={item.id} />
            <div className="absolute right-0 top-0"><p className='px-3 py-2.5   bg-[#1798d0] rounded-tr-3xl rounded-bl-2xl rounded-br-none'>{Number(item.discountPercentage.toFixed(0)) > 0 && (<span>{item.discountPercentage.toFixed(0)}%</span>)}</p></div>
          </div>
          <div className="px-4 py-2">
            <div className="py-1">
                <h4>{item.title.slice(0,15)}</h4>
            <div className="py-1 flex gap-2">
                
                <p className=''>{item.discountPercentage
    ? `$${(
        item.price -
        (item.price * item.discountPercentage) / 100
      ).toFixed(2)}`
    : ''}</p>
    <p className='line-through text-[#6C6C6C]'>${item.price}</p>
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
