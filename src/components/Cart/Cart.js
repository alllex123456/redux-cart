import React from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const formattedTotalAmount = totalAmount.toLocaleString(navigator.language, {
    style: 'currency',
    currency: 'USD',
  });

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
        <button>Send order</button>
        <button>Cancel</button>
      </div>
    </ul>
  );
}
