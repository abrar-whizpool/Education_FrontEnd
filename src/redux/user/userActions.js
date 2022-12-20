
// import {
//   getAuth, signOut
// } from "firebase/auth";
// import * as requestFromServer from "./userCrud";
// import { userSlice } from "./userReducer";
// const {actions} = userSlice;


// export const signUp = (navigate,data) => dispatch => {
//   return requestFromServer.signUp(data)
//   .then(async response => {
//     console.log("response signUp: ", response)
//       navigate('/login')
//     })
//     .catch(error => {
//       console.log("logIn catch",  error)
//     });
// };

// export const logIn = (navigate) => dispatch => {
//     dispatch(actions.startCall());
//     return requestFromServer.login()
//     .then(async response => {
//       console.log("response ",response )
//         await dispatch(actions.login({user:response?.data || {}}));
//         navigate('/dashboard/domain')
//       })
//       .catch(error => {
//         console.log("logIn catch",  error)
//         dispatch(actions.catchError({ error: error.message }));
//       });
//   };


// export const logOut = () => dispatch => {
//   const auth = getAuth();
//   return signOut(auth).then(()=>{
//     dispatch(actions.logout())
//   })
// };