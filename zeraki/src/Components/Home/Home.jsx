import React, { useEffect, useState } from 'react'
import Style from './Home.module.css'

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

    return <>
        <div className="vh-100 bg-danger">
            <h1>Home</h1>
        </div>
    </>
}
