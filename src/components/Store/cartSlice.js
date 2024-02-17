import { createSlice } from "@reduxjs/toolkit";
const initialState = { cartTotal: 0, cartItems: [] };
const  cartSlice = createSlice({
    name:"cart",
    initialState ,  
    reducers:{
        addToCart:(state,action)=>{
            const item= action.payload;
            
           state.cartItems.push(item);
           state.cartTotal +=1;
           console.log(state.cartItems)
         },
        removeFromCart:(state,action) =>{
          let index = state.cartItems.findIndex((i)=> i.id===action.payload);
          if (index!==-1){
              state.cartItems.splice(index,1);
              state.cartTotal -=1 ;
              console.log(state.cartItems)

          }          
       },
    }}
     );
     export const CartActions = cartSlice.actions;
     export default  cartSlice;

