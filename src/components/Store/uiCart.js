import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  Cartstatus: false,
};

const authSlice = createSlice({
  name: "cart",
  initialState: initialValues,
  reducers: {
    toggleCart(state) {
      state.Cartstatus = !state.Cartstatus;
    },
  },
});
// export default AuthSlice.reducer;
export const AuthActions = authSlice.actions;

export default authSlice;
