import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store/cart-actions';
import Header from './components/UI/Header';
import ProductList from './components/Shop/ProductList';
import Cart from './components/Cart/Cart';
import Modal from './components/UI/Modal';
import CartModal from './components/UI/CartModal';

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const notificationVisible = useSelector(
    (state) => state.ui.notificationVisible
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && notificationVisible && (
        <Modal>
          <h3>{notification.title}</h3>
          <h4>{notification.message}</h4>
        </Modal>
      )}
      <Header />
      {cartIsVisible && (
        <CartModal>
          <Cart />
        </CartModal>
      )}
      <ProductList />
    </React.Fragment>
  );
}

export default App;
