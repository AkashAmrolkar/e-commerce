import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/fetchProducts";

export const store = configureStore({
    reducer: {
        products: productReducer 
    }
})