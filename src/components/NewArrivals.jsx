import React, { useContext } from 'react'
import { Data } from './ApiData'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SliderModule from 'react-slick';
import Container from './Container';

const Slider = SliderModule.default;

const NewArrivals = () => {
    let {info, loading} = useContext(Data)

    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-0 top-[15%] lg:top-[35%] z-100 p-4 rounded-full bg-[rgba(151,151,151,0.4)] cursor-pointer"
      onClick={onClick}
    ><MdOutlineKeyboardArrowRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute left-0 top-[15%] lg:top-[35%] z-100 p-4 rounded-full bg-[rgba(151,151,151,0.4)] cursor-pointer"
      onClick={onClick}
    ><MdOutlineKeyboardArrowLeft /></div>
  );
}

    const settings = {
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
   <div className='py-20'>
      <Container>
        <div className="pb-20">
            <h2 className='text-5xl font-semibold '>New Arrivals Product</h2>
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

export default NewArrivals
