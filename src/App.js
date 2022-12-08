import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.style.css";
import { routes } from "./routes/routes";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
function App() {
  return (
    <>
      {/* <!-- preloader start --> */}
      {/* <div class="preloader">
        <img src="/source/images/preloader.gif" alt="preloader" />
      </div> */}
      {/* <!-- preloader end --> */}
      {/* <Header /> */}
      <RouterProvider router={routes} />
      <FloatingWhatsApp
        accountName="Al Rehman Tutoring"
        phoneNumber="03315154125"
      />
      {/* <Footer /> */}
    </>
  );
}

export default App;
