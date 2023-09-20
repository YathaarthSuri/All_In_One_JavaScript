import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      // Older Vanilla Redux
      //   let newState = [...state];
      //   newState.items.push(action.payload);
      //   return newState;

      // mutating our state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      //   state.items.length = 0;
      //   state.items = [];
      return { items: [] };
    },
  },
});

// console.log(cartSlice, 'hello');

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
