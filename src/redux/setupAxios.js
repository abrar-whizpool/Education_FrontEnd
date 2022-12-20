// import { getAuth } from "firebase/auth";


// export default function setupAxios(axios, store) {
//     /********** axios request interceptors **********/
//   axios.interceptors.request.use(
//     (config) => {
//       const firebaseAuth = getAuth();
//        const token = firebaseAuth.currentUser.accessToken
//       // const token = Cookies.get("AuthorityHawkToken");
//        console.log("firebaseAuth.accessToken ",firebaseAuth.currentUser);
//       if(token){
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (err) => {
//       console.log("axios.interceptors.request error => ", err);
//       throw new Error(err)
//       //  Promise.reject(err);
//     }
//   );

//   /********** axios response interceptors **********/
//   axios.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     async function (error) {
//       console.log("axios.interceptors.response error =>", error.response.status);
//       throw new Error(error)
//       // Promise.reject(error);
//     }
//   );
// }
