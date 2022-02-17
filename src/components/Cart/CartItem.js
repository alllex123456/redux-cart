import React from 'react';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-store';

export default function CartItem(props) {
  const dispatch = useDispatch();

  const { id, title, description, price, totalPrice, quantity } = props.item;
  const formattedPrice = price.toLocaleString(navigator.language, {
    style: 'currency',
    currency: 'USD',
  });
  const formattedTotalPrice = totalPrice.toLocaleString(navigator.language, {
    style: 'currency',
    currency: 'USD',
  });

  const addItemHandler = () => {
    dispatch(cartActions.addItem(props.item));
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <li>
      <div>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        <button onClick={removeItemHandler}>-</button>
        <button onClick={addItemHandler}>+</button>
      </div>
      <div>
        <h4 className={classes.price}>
          {formattedTotalPrice} <span>(Unit price: {formattedPrice})</span>
        </h4>
        <span className={classes.quantity}>{quantity} pcs.</span>
      </div>
    </li>
  );
}
