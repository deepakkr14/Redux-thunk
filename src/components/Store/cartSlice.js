import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiCart";
const initialState = { cartTotal: 0, cartItems: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (x) => x.itemId == newItem.itemId
      );
      console.log(newItem, existingItem);
      if (!existingItem) {
        state.cartItems.push({
          itemId: newItem.itemId,
          price: newItem.price,
          quantity: 1,
          totalPrice: 0,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      state.cartTotal += 1;
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex((x) => x.name === action.payload);

      if (index > -1) {
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity--;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.name !== action.payload
          );
        }
        state.cartTotal -= 1;
      }
    },
  },
});

  
export const CartActions = cartSlice.actions;
export default cartSlice;
