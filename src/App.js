import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/UI/Header';
import ProductList from './components/Shop/ProductList';
import Cart from './components/Cart/Cart';
import { sendCartData } from './store/cart-actions';

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      <Header />
      <Cart />
      <ProductList />
    </React.Fragment>
  );
}

export default App;
