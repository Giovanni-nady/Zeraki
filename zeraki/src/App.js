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


const routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'home', element: <Home /> },
      { path: 'register', element: <Register /> },
      { path: 'products', element: <Products /> },
      { path: 'brands', element: <Brands /> },
      { path: 'cart', element: <Cart /> },
      { path: 'categories', element: <Categories /> },
      { path: '*', element: <NotFound /> },
    ],
  }
]);

function App() {

  return <>
    <RouterProvider router={routers} />
  </>
}

export default App;
