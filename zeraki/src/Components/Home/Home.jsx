import React, { useContext, useEffect, useState } from 'react'
import Style from './Home.module.css'
import { CounterContext } from '../../Context/CounterContext.js'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts.jsx'

export default function Home() {

    // best way to make search
    
    // const [searchText, setSearchText] = useState('')

    // useEffect(() => {
    //     const timeOut = setTimeout(() => {
    //         fetch(`http://localhost=value=${searchText}`)
    //             .then((response) => {
    //                 response.json()
    //             })
    //             .then((response) => {
    //                 console.log(response);
    //             })
    //     }, 1500);

    //     return () => {
    //         clearTimeout(timeOut)
    //     }
    // }, [searchText])

    let { changeCounter } = useContext(CounterContext)

    return <>
            <FeaturedProducts/>
    </>
}
