import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.style.css";
import { routes } from "./routes/routes";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() { 
  return (
    <>
        <RouterProvider  router={routes} />
        <FloatingWhatsApp phoneNumber="03155591241" />
    </>
  );
}

export default App;
