import CartSlices from "./Slices/CartSlices";
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        cart: CartSlices,
    },
});