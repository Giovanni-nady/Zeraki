import React from 'react'
import Style from './CategorySlider.module.css'
import Slider from "react-slick";
import { useQuery } from 'react-query';
import axios from 'axios';
import LoadingForSection from './../../LoadingForSection/LoadingForSection';


export default function CategorySlider() {

    function getCategorySlider() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/categories`)
    }

    let { isLoading, isError, data } = useQuery("CategorySlider", getCategorySlider)

    console.log(data?.data.data);
    let categories = data?.data.data

    let settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
    };
    
    
    return <>

        {categories ?
            <div className="py-4 slider-container">
                <Slider {...settings}>
                    {categories.map((category) => (
                        <img src={category?.image} height={200} className='w-100' alt="category img" />
                    ))}
                </Slider>
            </div>
            : <div className='text-center py-4'>
                <LoadingForSection/>
            </div>}

    </>
}
