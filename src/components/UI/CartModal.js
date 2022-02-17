import React from 'react';
import ReactDOM from 'react-dom';
import classes from './CartModal.module.css';
import { uiActions } from '../../../src/store/ui-store';
import { useDispatch } from 'react-redux';

const Backdrop = (props) => {
  return <div className={classes.CartBackdrop} onClick={props.onCloseModal} />;
};

const Overlay = (props) => {
  return <div className={classes.CartOverlay}>{props.children}</div>;
};

export default function CartModal(props) {
  const dispatch = useDispatch();

  const closeModalHandler = () => dispatch(uiActions.toggleCart());
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={closeModalHandler} />,
        document.getElementById('cart')
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById('cart')
      )}
    </React.Fragment>
  );
}
