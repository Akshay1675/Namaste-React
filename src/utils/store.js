import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store