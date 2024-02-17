import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./uiCart";
const Store = configureStore({
    reducer: { toggler:authSlice.reducer, cart: cartSlice.reducer },
  });
// const Store = configureStore({
//     reducer:AuthSlice.reducer
//   });
export default Store;