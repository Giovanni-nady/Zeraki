import React, { useContext } from 'react'
import Style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext.js'
import { useQuery } from 'react-query'
import axios from 'axios'
import LoadingForSection from '../LoadingForSection/LoadingForSection.jsx'

export default function Cart() {

    let { getCart } = useContext(CartContext)

    let { isLoading, isError, data } = useQuery('CartItem', getCart)
    console.log(data?.data);
    return <>
        {isLoading ?
            <div className="vh-75 d-flex justify-content-center align-items-center">
                <LoadingForSection />
            </div>
            :
            <div className="row bg-main-light my-3 p-3">
                {/* {data?.data} */}
                <h4 className='h3'>Shop Cart : </h4>
                <h6 className='text-main fw-semibold'>Total Cart Price : {data?.data.data.totalCartPrice} EGP</h6>
                {data?.data.data.products?.reverse().map((product,index) => (
                    <>
                        <div className="col-md-1" key={product.id}>
                            <img src={product.product.imageCover} alt={product.title} className='w-100' />
                        </div>
                        <div key={index} className="col-md-11 d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="h6">{product.product.title}</h5>
                                <h5 className="h6 text-main">Price : {product.price}</h5>
                                <button className="h6 btn p-0"><i className="fa fa-trash text-danger"></i> Remove</button>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <button className="btn border-main rounded-pill p-2"><i className="fa fa-plus fw-light"></i></button>
                                <span className='mx-2'>1</span>
                                <button className="btn btn-outline-danger rounded-pill p-2"><i className="fas fa-minus"></i></button>
                            </div>
                        </div>
                        {data?.data.data.products?.length-1 !== index && <div className='border border-bottom-1 my-2 mx-auto'></div>}
                    </>
                ))}
            </div>
        }
    </>
}
