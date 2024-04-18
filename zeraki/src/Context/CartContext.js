import axios from "axios";
import { createContext } from "react";


export let CartContext = createContext();

export default function CartContextProvider(props) {
    
    let headers = {
        "token":localStorage.getItem('userTkn')
    }   

    async function addToCart(productID) {
        return await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/cart`, {
            productId:productID
        }, {
            headers:headers
        }).then((response) => response)
        .catch((error)=>error)
    }

    return <CartContext.Provider value={{ addToCart }}>
        {props.children}
    </CartContext.Provider>
}