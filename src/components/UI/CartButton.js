import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-store';
import classes from './CartButton.module.css';

export default function CartButton() {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartVisible = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartVisible}>
      <span className={classes.title}>YOUR CART</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
}
