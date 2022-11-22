import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.style.css";
import { routes } from "./routes/routes";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() { 
  return (
    <>
        <RouterProvider  router={routes} />
        <FloatingWhatsApp accountName="Al Rehman Tutoring" phoneNumber="03315154125" />
        
    </>
  );
}

export default App;
