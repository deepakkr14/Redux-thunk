import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  Cartstatus: false,notification:null
};

const authSlice = createSlice({
  name: "cart",
  initialState: initialValues,
  reducers: {
    toggleCart(state) {
      state.Cartstatus = !state.Cartstatus;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
// export default AuthSlice.reducer;
export const uiActions = authSlice.actions;

export default authSlice;
