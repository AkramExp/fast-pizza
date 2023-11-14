import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./src/features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
