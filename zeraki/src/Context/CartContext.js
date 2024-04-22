import axios from "axios";
import { createContext } from "react";


export let CartContext = createContext();

export default function CartContextProvider(props) {

    let headers = {
        "token": localStorage.getItem('userTkn')
    }

    async function addToCart(productID) {
        return await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/cart`, {
            productId: productID
        }, {
            headers: headers
        }).then((response) => response)
            .catch((error) => error)
    }

    function getCart() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/cart`, { headers })
    }

    function removeCartItem(ProductID) {
        return axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/${ProductID}`, { headers })
            .then((response) => response)
            .catch((error) => error)
    }
    
    function updateCartQuantity(ProductID, count) {
        return axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/cart/${ProductID}`, {count}, { headers })
        .then((response) => response)
        .catch((error) => error)
    }
    
    async function clearCart() {
        return await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/cart`, { headers })
            .then((response) => response)
            .catch((error) => error)
    }

    return <CartContext.Provider value={{ addToCart, getCart, removeCartItem, updateCartQuantity, clearCart }}>
        {props.children}
    </CartContext.Provider>
}