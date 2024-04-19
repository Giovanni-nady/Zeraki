import React from 'react'
import Style from './Layout.module.css'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Offline, Online } from "react-detect-offline";

export default function Layout() {

    return <>
        <Navbar />
        <section className="container">
            <Outlet />
        </section>

        <Offline>
            <div className="detect-offline">
                <i className="fas fa-wifi pe-2"></i> You are offline!
            </div>
        </Offline>
        <Footer />
    </>
}
