import { useContext } from "react";

import CartItem from "./CartItem";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

import CartContext from "../../db/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            amount={cartItem.amount}
            onRemove={removeCartHandler.bind(null, cartItem.id)}
            onAdd={addCartHandler.bind(null, cartItem)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
