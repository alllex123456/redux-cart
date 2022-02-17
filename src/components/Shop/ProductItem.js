import React from 'react';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart-store';
import { useDispatch } from 'react-redux';

export default function ProductItem(props) {
  const dispatch = useDispatch();

  const { id, title, description, price } = props.item;
  const formattedPrice = price.toLocaleString(navigator.language, {
    style: 'currency',
    currency: 'USD',
  });
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        description,
        price,
      })
    );
  };

  return (
    <li className={classes.product}>
      <div>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
      </div>
      <div>
        <button onClick={addToCartHandler}>Add to cart &rarr;</button>
        <p className={classes.price}>Price: {formattedPrice}</p>
      </div>
    </li>
  );
}
