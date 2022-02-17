import React from 'react';
import classes from './ProductList.module.css';
import ProductItem from './ProductItem';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Product Title 1',
    description: 'Product 1 Description',
    price: 25.99,
  },
  {
    id: 'p2',
    title: 'Product Title 2',
    description: 'Product 2 Description',
    price: 15.6,
  },
  {
    id: 'p3',
    title: 'Product Title 3',
    description: 'Product 3 Description',
    price: 45.0,
  },
];

export default function ProductList() {
  return (
    <div className={classes['product-container']}>
      <h2 className={classes.heading}>Product List</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            item={{
              id: product.id,
              title: product.title,
              description: product.description,
              price: product.price,
            }}
          />
        ))}
      </ul>
    </div>
  );
}
