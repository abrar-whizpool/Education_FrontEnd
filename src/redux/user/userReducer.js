 import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    loading: false,
    entity: null,
    error: null,
  };
  
  export const userSlice = createSlice({
    name: "customers",
    initialState: initialState,
    reducers: {
        catchError: (state, action) => {
          state.error = action?.payload?.error || 'error';
          state.loading = false;
        },
        startCall: (state, action) => {
          state.loading = true;
        },
        login: (state, action) => {
          state.entity = action.payload.user;
          state.loading = false;
          state.error = null;
        },
        logout: (state, action) => {
          state.entity = null;
          state.loading = false;
          state.error = null;
        },
      }
    });

  //   {
  //     token: "12312312312dsdfsadf243f4",
  //     id: "IO234NO2I349DJESDOS",
  //     name: "test-name",
  //     email: "testuser@gmail.com",
  //     roleId: 1,
  //     role: { id: 1, role: "admin" },
  //     planId:1,
  //     plan:{id:1,name:'premium',cost:10,duraction:'month',credits:250},
  //     planExpiry:'',
  //     totalCrdits:5000,
  //     planCredits:2000,
  //     purchasedCredit:3000
  // }