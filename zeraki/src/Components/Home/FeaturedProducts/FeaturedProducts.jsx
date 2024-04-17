import React, { useState } from 'react'
import Style from './FeaturedProducts.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { FidgetSpinner } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

export default function FeaturedProducts() {

    let { isLoading, isError, data, isFetching } = useQuery('featuredProducts', getFeaturedProducts, {
        // cacheTime,:3000  htban lw ro7t l page tanya w a3t 3 sec,
        // refetchOnMount:false 
        // enable:true
        // keda hya btshtghl 3la tol fl mounting phase f el 7al ane a3mlha false w astkhdm el refetch ale btrg3 mn el useQuery
    })

    function getFeaturedProducts() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/products`)
    }


    return <>

            <h2>Featured Products</h2>
            {isLoading ?
                <div className="text-center py-3">
                    <FidgetSpinner
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="fidget-spinner-loading"
                        wrapperStyle={{}}
                        wrapperClass="fidget-spinner-wrapper"
                    />
                </div>
                :
                <div className="row py-2">
                    {data?.data.data.map((product, index) => (
                        <article className='product cursor-pointer py-3 px-2 col-md-2'>
                            <Link to={`/productDetails/${product.id}`}>
                            <img className="w-100" src={product.imageCover} alt={product.title} />

                            <span className="text-main font-sm fw-bolder">
                                {product.category.name}
                            </span>
                            <h3 className='h6'>{product.title.split(" ").slice(0, 2).join(" ")} </h3>

                            <div className="d-flex justify-content-between mt-3">
                                <span>{product.price} EGP</span>
                                <span><i className='fas fa-star rating-color'></i> {product.ratingsAverage}</span>
                            </div>

                            <button className='btn bg-main text-white w-100 btn-sm mt-2'>add to cart</button>
                        </Link>
                        </article>
                    ))}
                </div>
            }
    </>
}
