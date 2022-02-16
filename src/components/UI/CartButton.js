import React from 'react';
import classes from './CartButton.module.css';

export default function CartButton() {
  return (
    <button className={classes.button}>
      <span className={classes.title}>YOUR CART</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
