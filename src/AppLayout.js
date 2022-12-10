import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
const AppLayout = () => {
  return (
    <div>
        {/* <!-- preloader start --> */}
  <div class="preloader">
    <img src="/source/images/preloader.gif" alt="preloader" />
  </div>
  {/* <!-- preloader end --> */}
         <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AppLayout