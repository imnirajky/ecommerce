import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const { id, title, price, images } = action.payload;
            state.items.push({ id, title, price, images, quantity: 1 });
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex((product) => (product.id === action.payload.id));
            state.items.splice(index, 1);
        },
        addQuantity: (state, action) => {
            const index = state.items.findIndex((product) => (product.id === action.payload.id));
            state.items[index].quantity++;
        },
        removeQuantity: (state, action) => {
            const index = state.items.findIndex((product) => (product.id === action.payload.id));
            state.items[index].quantity--;
        }
    }
});

export const { addItem, removeItem, addQuantity, removeQuantity } = cartSlice.actions;
export default cartSlice.reducer;