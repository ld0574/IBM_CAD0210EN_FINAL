import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload.name);
        },
        
        updateQuantity: (state, action) => {
            const item = state.items.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        }
    }
});

// 导出 action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// 导出 reducer
export default cartSlice.reducer;
