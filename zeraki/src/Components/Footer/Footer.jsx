import React from 'react'
import Style from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return <>
        <div className="bg-main-light">     
        <div className="container">
            <footer className="py-3 mt-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="/home" className="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li className="nav-item"><Link to="/products" className="nav-link px-2 text-body-secondary">Products</Link></li>
                        <li className="nav-item"><Link to="/categories" className="nav-link px-2 text-body-secondary">Categories</Link></li>
                    <li className="nav-item"><Link to="/brands" className="nav-link px-2 text-body-secondary">Brands</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary">About</Link></li>
                </ul>
                <p className="text-center text-body-secondary">&copy; 2024 Company, Inc</p>
            </footer>
        </div>
        </div>
    </>
}
