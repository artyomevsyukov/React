import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import mainSlice from "./main-slice";

export const store = configureStore({
    reducer: {
        main: mainSlice,
        cart: cartSlice,
    },
});
