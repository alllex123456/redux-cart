import React from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-store';
import { cartActions } from '../../store/cart-store';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const formattedTotalAmount = totalAmount.toLocaleString(navigator.language, {
    style: 'currency',
    currency: 'USD',
  });
  const quantityOverZero = cart.length > 0;

  const hideCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <ul className={classes.cart}>
      <h3 className={classes.heading}>Your cart</h3>
      {cart.map((product) => (
        <CartItem
          key={product.id}
          item={{
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            totalPrice: product.totalPrice,
          }}
        />
      ))}
      <h3 className={classes.totalAmount}>
        Total amount for the order: {formattedTotalAmount}
      </h3>
      <div className={classes.actions}>
        {quantityOverZero && <button>Send order</button>}
        {quantityOverZero && (
          <button onClick={clearCartHandler}>Clear cart</button>
        )}
        <button onClick={hideCartHandler}>Close</button>
      </div>
    </ul>
  );
}
