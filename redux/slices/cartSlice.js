// Create a slice
// Create reducers
// Export the reducer and reducers

const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //Your logic for addToCart
      const { id, title, salePrice, imageUrl } = action.payload;
      //Check if the item already exists in the cart
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        //If the item exists, update the quantity
        existingItem.qty += 1;
      } else {
        //If the item doesn't exist, add it to the cart
        state.push({ id, title, salePrice, qty: 1, imageUrl });
      }
    },
    removeFromCart: (state, action) => {
      //Your logic for removeFromCart
      const cardId = action.payload;
      return state.filter((item) => item.id !== cardId);
    },
    incrementQty: (state, action) => {
      //Your logic for incrementQty
      const cardId = action.payload;
      const cardItem = state.find((item) => item.id === cardId);
      if (cardItem) {
        cardItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      //Your logic for decrementQty
      const cardId = action.payload;
      const cardItem = state.find((item) => item.id === cardId);
      if (cardItem && cardItem.qty > 1) {
        cardItem.qty -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
