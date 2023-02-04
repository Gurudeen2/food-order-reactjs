import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./db/CartProvider";

function App() {
  const [onShow, setOnShow] = useState(false);

  const onShowHandler = () => {
    setOnShow(true);
  };

  const onHideHandler = () => {
    setOnShow(false);
  };
  return (
    <CartProvider>
      {onShow && <Cart onCloseCart={onHideHandler} />}
      <Header onShowCart={onShowHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
