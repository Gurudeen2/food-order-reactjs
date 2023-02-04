import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [onShow, setOnShow] = useState(false);

  const onShowHandler = () => {
    setOnShow(true);
  };

  const onHideHandler = () => {
    setOnShow(false);
  };
  return (
    <Fragment>
      {onShow && <Cart onCloseCart={onHideHandler} />}
      <Header onShowCart={onShowHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
