import React from 'react';
import classes from './Header.module.css';
import CartButton from './CartButton';

export default function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Redux Cart</h1>
      <CartButton>CART BUTTON</CartButton>
    </header>
  );
}
