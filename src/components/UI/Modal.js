import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>;
};
const Modal = (props) => {
  const PortalElement = document.getElementById("overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, PortalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </Fragment>
  );
};
export default Modal;
