import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./src/features/cart/cartSlice";
import userSlice from "./src/features/user/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});

export default store;
