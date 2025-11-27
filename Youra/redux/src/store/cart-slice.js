import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const product = action.payload
      const item = state.items.find((i) => i.id === product.id)
      if (item) {
        // Immer
        item.quantity++
        item.total = item.quantity * product.price
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          total: product.price,
        })
      }
    },
    clear: (state) => {
      state.items = []
    },

    increase: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        item.quantity++
        item.total = item.quantity * item.price
      }
    },

    decrease: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity--
        item.total = item.quantity * item.price
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload)
      }
    },
  },
})

export const selectCartItems = (state) => state.cart.items
export const cartActions = cartSlice.actions

export default cartSlice.reducer
