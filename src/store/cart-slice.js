import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice:0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const Newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === Newitem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: Newitem.id,
          price: Newitem.price,
          quantity: 1,
          totalPrice: Newitem.price ,
          name:Newitem.title,
        });
        //add the new item to the array and calculate the quantity and amount of the new item
        // state.totalQuantity = state.totalQuantality + 1; 
        state.totalPrice += Newitem.price; 
      }
      else{
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.totalPrice + Newitem.price;
        state.totalPrice += Newitem.price; 
      }
    },
    removeItemFromCart(state, action) {
        const id= action.payload;
        const existingItem = state.items.find(item => item.id === id);
        state.totalQuantity--;
        if(existingItem.quantity === 1){
            // if the quantity is 1 then we need to remove it from the array
            return state.items = state.items.filter(item => item.id !==id)
        }
        else{
            // if the quantity of item is more than 1 we just need to  decrease its quantity by one
            existingItem.quantity -= 1;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            // removing 
        }
    },
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice;