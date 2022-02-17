export const fetchCartData = () => {
  return async (dispatch) => {
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
    } catch (error) {
      alert(error.message);
    }
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
