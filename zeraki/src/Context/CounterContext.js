import { createContext, useState } from "react";

export let CounterContext = createContext()

export default function CounterContextProvider(props) {
    
    const [counter, setCounter] = useState(0)

    const changeCounter = () => {
        let num = Math.random() * 100
        num = Math.floor(num)
        setCounter(num)
    }
    return <CounterContext.Provider value={{ counter, changeCounter }}>
        {props.children}
    </CounterContext.Provider>
}