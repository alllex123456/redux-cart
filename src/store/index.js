import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-store';

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export default store;
