//Slice is made up of three steps
/**
 * 1) Create a slice
 * 2) Create initial state
 * 3) Create reducers
 * 4) Export the slice reducers
 * 5) Export the slice reducer
 */

const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  currentStep: 1,
  checkoutFormData: {},
};
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    //Functions to used to manipulate the state
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateCheckoutFormData: (state, action) => {
      state.checkoutFormData = {
        ...state.checkoutFormData,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentStep, updateCheckoutFormData } = checkoutSlice.actions;

export default checkoutSlice.reducer;
