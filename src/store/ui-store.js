import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    cartIsVisible: false,
    notification: null,
    notificationVisible: true,
  },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showCart(state) {
      state.cartIsVisible = true;
    },
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    hideNotification(state) {
      state.notificationVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
