import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-store';
import uiSlice from './ui-store';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
