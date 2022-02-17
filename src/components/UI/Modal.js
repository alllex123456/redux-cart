import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const Overlay = (props) => {
  return <div className={classes.overlay}>{props.children}</div>;
};

export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('modal'))}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById('modal')
      )}
    </React.Fragment>
  );
}
