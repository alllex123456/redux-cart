import { cartActions } from './cart-store';
import { uiActions } from './ui-store';

export const fetchCartData = () => {
  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: 'Please wait...',
        message: 'We are loading your cart information',
      })
    );

    const fetchData = async () => {
      const response = await fetch(
        'https://hooks-4826d-default-rtdb.firebaseio.com/cart2.json'
      );
      if (!response.ok) throw new Error('Fetching data failed');
      const data = await response.json();
      return data;
    };

    try {
      const cart = await fetchData();
      await delay(1000);
      dispatch(
        cartActions.replaceCart({
          items: cart.items,
          totalAmount: cart.totalAmount,
          totalQuantity: cart.totalQuantity,
        })
      );
    } catch (error) {
      alert(error.message);
    }
    dispatch(uiActions.hideNotification());
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendData = async () => {
      const response = await fetch(
        'https://hooks-4826d-default-rtdb.firebaseio.com/cart2.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) throw new Error('Sending data failed');
    };
    try {
      await sendData();
    } catch (error) {
      alert(error.message);
    }
  };
};
