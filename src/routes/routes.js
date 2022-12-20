
import { createBrowserRouter } from "react-router-dom";
import Home from "../app/Home";
import NotFoundError from "../app/NotFoundError";
import AppLayout from "../AppLayout";
import About from "../app/About";
import Contact from "../app/Contact";
import Cart from "../app/Cart";
import Checkout from "../app/Checkout";
import ProductDetails from "../app/ProductDetails";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: < AppLayout/>,
    errorElement:<NotFoundError/>,
    children: [
      {
        path: "/",
        element:<Home/>,
        errorElement:<NotFoundError/>,
      },
      {
        path: "/about",
        element:<About/>,
        errorElement:<NotFoundError/>,
      },
      {
        path: "/cart",
        element:<Cart/>,
        errorElement:<NotFoundError/>,
      },
      {
        path: "/checkout",
        element:<Checkout/>,
        errorElement:<NotFoundError/>,
      },
       {
        path: "/contact",
        element:<Contact/>,
        errorElement:<NotFoundError/>,
      },
       {
        path: "/product-details",
        element:<ProductDetails/>,
        errorElement:<NotFoundError/>,
      },
    ],
  },
  // {
  //   path: "/contact",
  //   element:<Home/>,
  //   errorElement:<NotFoundError/>,
  // },
  // {
  //   path: "/about",
  //   element:<About/>,
  //   errorElement:<NotFoundError/>,
  // },
  // {
  //   path: "/job",
  //   element:<Job/>,
  //   errorElement:<NotFoundError/>,
  // },
  // {
  //   path: "/courses",
  //   element:<Courses/>,
  //   errorElement:<NotFoundError/>,
  // },
]);