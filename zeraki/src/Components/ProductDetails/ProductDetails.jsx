import React from 'react'
import Style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { FidgetSpinner } from 'react-loader-spinner'

export default function ProductDetails() {
    // /api/v1/products/${productID}

    const { productID } = useParams()

    function getProductDetails(productID) {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/products/${productID}`)
    }

    let { isLoading, isError, data } = useQuery('productDetails', () => getProductDetails(productID))
    console.log(data?.data.data);
    let productData = data?.data.data
    return <>
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
            <section className="row py-2 align-items-center">
                <div className="col-md-4">
                    <img src={productData.imageCover} alt={productData.title} className="w-100" />
                </div>
                <div className="col-md-8">
                    <h2 className='h5'>{productData.title}</h2>
                    <p>{productData.description}</p>

                    <h6 className='text-main'>{productData?.category.name}</h6>
                    <h6 className='text-main'>Price : {productData.price} EGP</h6>

                    <div className="d-flex justify-content-between">
                        <h6>Rating Quantity : {productData.ratingsQuantity}</h6>

                        <span><i className='fas fa-star rating-color'></i> {productData.ratingsAverage}</span>
                    </div>

                    <button className="btn bg-main text-white w-100 mt-2">+ Add to cart</button>
                </div>
                {/* {data?.data.data} */}
                <h1>ProductDetails</h1>
            </section>
        }
    </>
}
