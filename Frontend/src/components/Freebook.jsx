// import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';


export default function Freebook() {
  const fliterData = list.filter((item) => item.category === "Free");
  console.log(fliterData)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2xl constiner mx-auto md:px-20 px-4 '>
        <div>
          <h1 className='font-semibold text-xl pb-2'>
            Free offered course...
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nihil unde soluta totam aliquam sed expedita voluptas. Eveniet temporibus ut mollitia enim quia. Ipsa sunt placeat repudiandae dolor eveniet autem.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {fliterData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
