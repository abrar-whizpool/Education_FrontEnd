import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH, PAUSE,
  PERSIST, persistReducer, PURGE,
  REGISTER, REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./rootReducer";


const persistConfig = {
  key: 'cart',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [
//   ...getDefaultMiddleware({
//     immutableCheck: false,
//     serializableCheck: false,
//     thunk: true
//   }),
//   sagaMiddleware
// ];
 
// const store = configureStore({
//   reducer: rootReducer,
//   middleware,
// //   devTools: process.env.NODE_ENV !== "production",
//   enhancers: [reduxBatch]
// });

// export const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
});
