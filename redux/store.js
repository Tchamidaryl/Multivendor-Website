import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import checkoutSlice from "./slices/checkoutSlice";
import onboardingSlice from "./slices/onboardingSlice"

// Create the Store
export const store = configureStore({
  reducer: {
    // Slides go here
    cart: cartSlice,
    checkout: checkoutSlice,
    onboarding: onboardingSlice,
  },
});
