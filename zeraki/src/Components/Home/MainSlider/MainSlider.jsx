import React from 'react'
import Style from './MainSlider.module.css'


import slide1 from "../../../assets/images/slider-image-1.jpeg"
import slide2 from "../../../assets/images/slider-image-2.jpeg"
import slide3 from "../../../assets/images/slider-image-3.jpeg"

import blog1 from "../../../assets/images/blog-img-1.jpeg"
import blog2 from "../../../assets/images/blog-img-2.jpeg"
import Slider from 'react-slick'

export default function MainSlider() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };


    return <>
        <div className="row pt-2 gx-0">
            <div className="col-md-9">
                <div className="slider-container">
                    <Slider {...settings}>
                        <img height={400} src={slide1} alt="slide 1" className="w-100 object-fit-cover" />
                        <img height={400} src={slide2} alt="slide 2" className="w-100 object-fit-cover" />
                        <img height={400} src={slide3} alt="slide 3" className="w-100 object-fit-cover" />
                    </Slider>
                </div>
            </div>
            <div className="col-md-3">
                <img src={slide2} alt="" height={200} className="w-100 object-fit-cover" />
                <img src={blog2} alt="" height={200} className="w-100 object-fit-cover" />
            </div>
        </div>
    </>
}
