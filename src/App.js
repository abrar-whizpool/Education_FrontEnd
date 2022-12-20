import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { RouterProvider } from "react-router-dom";
import "./App.style.css";
import { routes } from "./routes/routes";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import * as _redux from "./redux";
import store from "./redux/store";
import axios from "axios";
import { Provider } from "react-redux";
import { PhoneNumber, Title } from "./common/constants";

let persistor = persistStore(store);

function App() {
  // _redux.setupAxios(axios, store);

  return (
    <>
   <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RouterProvider router={routes} />
      {/* <FloatingWhatsApp
        accountName={Title}
        phoneNumber={PhoneNumber}
      /> */}
       </PersistGate>
      </Provider>
    </>
  );
}

export default App;
