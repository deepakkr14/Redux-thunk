import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./uiCart";
const Store = configureStore({
    reducer: { auth:authSlice.reducer, cart: cartSlice.reducer },
  });
// const Store = configureStore({
//     reducer:AuthSlice.reducer
//   });
export default Store;