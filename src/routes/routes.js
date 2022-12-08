
import { createBrowserRouter } from "react-router-dom";
import NotFoundError from "../app/NotFoundError";
import Home from "../app/Home";
import Contact from "../app/Contact";
import About from "../app/About";
import Courses from "../app/Courses";
import Job from "../app/Job";
import AppLayout from "../AppLayout";


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
        path: "/job",
        element:<Job/>,
        errorElement:<NotFoundError/>,
      },
      {
        path: "/courses",
        element:<Courses/>,
        errorElement:<NotFoundError/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
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