import React, { useContext } from 'react'
import Style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext.js'
import { useQuery } from 'react-query'
import axios from 'axios'
import LoadingForSection from '../LoadingForSection/LoadingForSection.jsx'
import emptyCart from './../../assets/images/empty-cart.svg'

export default function Cart() {

    let { getCart, removeCartItem, updateCartQuantity, clearCart } = useContext(CartContext)

    let { isLoading, isError, data, refetch,error } = useQuery('CartItem', getCart)
    console.log(data?.data);
    console.log(error);

    async function removeItem(id) {
        console.log(id);
        let response = await removeCartItem(id);
        console.log(response);
        refetch()
    }
    
    async function updateCartItem(id, count) {
        let response = await updateCartQuantity(id,count);
        console.log(response);
        refetch()
    }
    
    async function clearCartItems() {
        let response = await clearCart();
        console.log(response);
        refetch()
    }
    return <>
        {isLoading ?
            <div className="vh-75 d-flex justify-content-center align-items-center">
                <LoadingForSection />
            </div>
            :
            <div className="row bg-main-light my-3 p-3 align-items-center">
                {data?.data.data.products?.length === 0 || error.response.status === 404 ?
                    <div className="d-flex justify-content-center align-items-center p-5">
                        <img src={emptyCart} alt="empty cart" width={500} lazy={true} /></div>
                    :
                    <>
                        <h4 className='h3'>Shop Cart : </h4>
                        <h6 className='text-main'>Cart Items : {data?.data.numOfCartItems}</h6>
                        <h6 className='text-main mb-4'>Total Cart Price : <span className='fw-bolder'>{data?.data.data.totalCartPrice} EGP</span></h6>
                        {data?.data.data.products?.map((product, index) => (
                            product.count>0 && <>
                                <div className="col-md-1" key={product.product.id}>
                                    <img src={product.product.imageCover} alt={product.title} className='w-100' />
                                </div>
                                <div key={index} className="col-md-11">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h5 className="h6">{product.product.title}</h5>
                                            <h5 className="h6 text-main">Price : {product.price} EGP</h5>
                                        </div>

                                        <div className="d-flex justify-content-center align-items-center">
                                            <button onClick={() => updateCartItem(product.product.id,product.count+1)} className="btn border-main rounded-pill p-2"><i className="fa fa-plus fw-light"></i></button>
                                            <span className='mx-2'>{product.count}</span>
                                            <button onClick={() => updateCartItem(product.product.id, product.count - 1)} className="btn btn-outline-danger rounded-pill p-2"><i className="fas fa-minus"></i></button>
                                        </div>
                                    </div>

                                    <button onClick={() => removeItem(product.product.id)} className="h6 btn border-0 p-0"><i className="fa fa-trash text-danger"></i> Remove</button>
                                </div>
                                {data?.data.data.products?.length - 1 !== index && <div className='border border-bottom-1 my-2 mx-auto'></div>}
                            </>
                        ))}
                        <div><button onClick={() => clearCartItems()} className='btn btn-outline-danger w-100 mt-3'>Clear Cart</button></div>
                    </>
                }
            </div>
        }
    </>
}
