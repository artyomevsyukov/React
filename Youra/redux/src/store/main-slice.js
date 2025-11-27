import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";
const initialState = {
    products: data,
};

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {},
});

export const selectProducts = (state) => state.main.products;

export default mainSlice.reducer;
