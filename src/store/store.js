import { configureStore } from "@reduxjs/toolkit";
import storeproducts from "./slices/storeproducts";
export const store = configureStore({
    reducer:{
        storeproducts
    }
})