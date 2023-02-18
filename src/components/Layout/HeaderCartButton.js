import React, { useContext, useState, useEffect } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../db/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
       setBtnHighlighted(true);
    setTimeout(() => {
      setBtnHighlighted(false)
    }, 300);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
