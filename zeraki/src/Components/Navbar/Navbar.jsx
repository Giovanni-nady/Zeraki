import React, { useContext } from 'react'
import Style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/main.svg'
import { CounterContext } from '../../Context/CounterContext.js'
import { UserContext } from '../../Context/UserContext.js'
export default function Navbar() {

    let { counter } = useContext(CounterContext)
    let { userToken, setUserToken } = useContext(UserContext)
    let navigate = useNavigate()

    function logout() {
        localStorage.removeItem('userTkn')
        setUserToken(null)
        navigate('/login')
    }

    return <>
        <nav
            className="navbar sticky-top navbar-expand-md navbar-light bg-light"
        >
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" href="#home">
                    <img src={logo} width={35} alt="zeraki logo" />
                    <span className='ms-1 fw-bold fs-4'>Zeraki</span></Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        {userToken && <>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-hover" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-hover" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-hover" to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-hover" to="/brands">Brands</Link>
                            </li>

                        </>}
                    </ul>
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item d-flex align-items-center">
                            <span className="nav-social cursor-pointer mx-2">
                                <i className="fab fa-facebook"></i>
                            </span>
                            <span className="nav-social cursor-pointer mx-2">
                                <i className="fab fa-instagram"></i>
                            </span>
                            <span className="nav-social cursor-pointer mx-2">
                                <i className="fab fa-x-twitter"></i>
                            </span>
                            <span className="nav-social cursor-pointer mx-2">
                                <i className="fab fa-tiktok"></i>
                            </span>
                            <span className="nav-social cursor-pointer mx-2">
                                <i className="fab fa-youtube"></i>
                            </span>
                        </li>

                        {!userToken ?
                            <><li className="nav-item">
                                <Link className="nav-link nav-link-hover" to="/login">Login</Link>
                            </li>

                                <li className="nav-item">
                                    <Link className="nav-link nav-link-hover" to="/register">Register</Link>
                                </li></>
                            : <>
                                <li className="nav-item me-3">
                                    <Link className="nav-link  position-relative" to="/cart"><i className='fa fa-cart-shopping'></i>
                                        <span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                                            9+
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item nav-link-hover">
                                    <span onClick={() => logout()} className="nav-link cursor-pointer">Logout</span>
                                </li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </nav>

    </>
}
