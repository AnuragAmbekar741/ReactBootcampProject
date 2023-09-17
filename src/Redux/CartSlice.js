import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [
            {
                name: 'biryani'
            },
            {
                name: 'biryani'
            },

        ]
    },
    reducers: {
        addItem: (state, action) => {
            state.value.push(action.payload)
        },

        deleteItem: (state) => {
            state.value.pop()
        },

        clearCart: () => {
            state.value = []
        }
    }

})

export const { addItem, deleteItem, clearCart } = cartSlice.actions
export default cartSlice.reducer