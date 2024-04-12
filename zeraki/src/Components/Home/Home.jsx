import React, { useContext, useEffect, useState } from 'react'
import Style from './Home.module.css'
import { CounterContext } from '../../Context/CounterContext.js'

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
        <div className="vh-100 bg-danger">
            <h1>Home</h1>
            <button onClick={changeCounter} className='btn btn-primary'>Click</button>
        </div>
    </>
}
