import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: "car",
    initialState: {
        cars: ["Model S", "Model 3", "Model X", "Model Y"]
    },
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer;