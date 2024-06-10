import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
}
const storeProducts = createSlice({
    name: "storeProducts",
    initialState,
    reducers:{
        allproducts: (state=initialState, action)=>{
            state.products=action.payload
        }
    }
    
})
export const { allproducts} = storeProducts.actions

export default storeProducts.reducer