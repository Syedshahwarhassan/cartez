import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
  TotalQuantity:0,
  TotalAmount:0
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart (state, action){
const item=state.cart.findIndex((item)=>item.id==action.payload.id)
if(item>=0)
{  
  state.cart[item].TotalQuantity+=1;
}else{        const entry={...action.payload,TotalQuantity:1}
      state.cart.push(entry);}
      state.TotalQuantity+=1;
      state.TotalAmount=state.TotalQuantity*action.payload.discountedPrice;
     

      localStorage.setItem("cart",JSON.stringify(state.cart,state.TotalQuantity,state.TotalAmount))
      localStorage.setItem("qty",JSON.stringify(state.TotalQuantity))
      localStorage.setItem("price",JSON.stringify(state.TotalAmount))
    
    },
  },
});

export const { addTocart } = cartSlice.actions;
export default cartSlice.reducer;