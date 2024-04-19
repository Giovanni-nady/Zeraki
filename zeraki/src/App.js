import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';
import Categories from './Components/Categories/Categories';
import CounterContextProvider from './Context/CounterContext.js';
import UserContextProvider, { UserContext } from './Context/UserContext.js';
import { useContext, useEffect } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import CartContextProvider from './Context/CartContext.js';
import { ToastContainer } from 'react-toastify';


const routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: 'productDetails/:productID', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: '*', element: <NotFound /> },
    ],
  }
]);

function App() {
  
  let { setUserToken } = useContext(UserContext)

  useEffect(() => {
    if (localStorage.getItem('userTkn') !== null)
      setUserToken(localStorage.getItem('userTkn'))
  }, [])

  return <><CartContextProvider>
    <CounterContextProvider>
      <RouterProvider router={routers} />
    </CounterContextProvider>
  </CartContextProvider>
    <ToastContainer />

  </>
}

export default App;
