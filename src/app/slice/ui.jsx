import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.ui.cars;

export default uiSlice.reducer;
