 import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    loading: false,
    entity: [],
    error: null,
  };
  
  export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        catchError: (state, action) => {
          state.error = action?.payload?.error || 'error';
          state.loading = false;
        },
        startCall: (state, action) => {
          state.loading = true;
        },
        addToCart: (state, action) => {
          // state.loading = true;
          if(!state.entity.find(item=>item?.id ===action?.payload?.entity?.id)){
            state.entity.push({...action.payload.entity,qty:1})
          }
        
        },
        removeFromCart:(state, action)=>{
      
            state.entity = state.entity.filter(item => item.id !== action?.payload?.entity?.id)
          
        }
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