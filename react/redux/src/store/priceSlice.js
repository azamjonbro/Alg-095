import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    value: 0,
  },
  reducers: {
    add(state, price) {
      state.value += price;
    },
    minus(state) {
      state.value -= 1;
    },
    addByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { add, minus, addByAmount } = priceSlice.actions;
export default priceSlice.reducer;
