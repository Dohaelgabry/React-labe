import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{cart:[]},
    reducers:{
      
        addToCart:(state,action)=> 
        {
            console.log("hi in action add to cart")
            console.log(state.cart)
            console.log(action)
            state.cart.push(action.payload)
           
        },
        removeCart:(state,action)=>
        {
        //     console.log(action.payload)
            let D=state.cart.filter((item)=>item.id!=action.payload)
           state.cart=D;
        }

    }
})
export const {addToCart,removeCart}=cartSlice.actions;

export const cartReducer=cartSlice.reducer;