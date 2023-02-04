import React, { Fragment } from "react";
import imgMeal from "../../assets/images/meals.jpg";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>TolaMeal</h1>
        <HeaderCartButton
          onShowCart={props.onShowCart}
        />
      </header>

      <div className={classes["main-image"]}>
        <img src={imgMeal} alt="header " />
      </div>
    </Fragment>
  );
};

export default Header;
