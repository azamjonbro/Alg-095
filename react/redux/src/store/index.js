import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./priceSlice";

export const store = configureStore({
  reducer: {
    price: priceReducer,
    allProduct: 
  },
});
