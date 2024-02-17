import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiCart";
const initialState = { cartTotal: 0, cartItems: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
export const sendCartData=(cart)=>{
  return async (dispatch)=>{
    dispatch(  uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    })
  )
  const sendRequest = async () => {
    const response = await fetch(
      "https://react-api-backend-dc22b-default-rtdb.firebaseio.com/cart.json",
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) {
      throw new Error('Sending cart data failed.');
    }
  };

  try {
    await sendRequest();

    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      })
    );
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      })
    );
  }}
}
  
export const CartActions = cartSlice.actions;
export default cartSlice;
