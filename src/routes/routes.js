
import { createBrowserRouter } from "react-router-dom";
import NotFoundError from "../app/NotFoundError";
import Home from "../app/Home";
import Contact from "../app/Contact";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: < Contact/>,
    errorElement:<NotFoundError/>,
  },
  {
    path: "/contact",
    element:<Home/>,
    errorElement:<NotFoundError/>,
  },
  // {
  //   path: "/signup",
  //   element: <SignUp />,
  //   errorElement:<NotFoundError/>,
  // },
  // {
  //   path: "/forgetPassword",
  //   element: <ForgetPassword />,
  //   errorElement:<NotFoundError/>,
  // },
]);