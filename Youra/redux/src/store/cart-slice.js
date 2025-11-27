import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const product = action.payload;
            const item = state.items.find((i) => i.id === action.payload);
            console.log(item);
            if (item) {
                // Immer
                item.quantity++;
                item.total = item.quantity * product.price;
            } else {
                state.items.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                    total: product.price,
                });
            }
        },
        clear: (state) => {
            state.items = [];
        },
        increase: (state, action) => console.log("increase"),
        decrease: (state, action) => console.log("decrease"),
    },
});

export const selectCartItems = (state) => state.cart.items;
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
