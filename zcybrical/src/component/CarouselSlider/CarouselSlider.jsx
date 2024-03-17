import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgFirst from "../../assets/slider1.jpeg"
import imgSecond from "../../assets/sllider2.jpeg"
import imgThird from "../../assets/slider3.jpeg"
import "./CarouselSlider.css"

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };


  return (
    <div className='carousel-container'>
      <div className=''>
        <div className="">
          <Slider {...settings} className='slider-container'>
            <div className="carousel-page">
              <img src={imgFirst} alt="Image 1" />
            </div>
            <div className="carousel-page">
              <img src={imgSecond} alt="Image 2" />
            </div>
            <div className="carousel-page">
              <img src={imgThird} alt="Image 3"/>
            </div>
           
          </Slider>


        </div>

      </div>
    </div>
  )
}

export default CarouselSlider
