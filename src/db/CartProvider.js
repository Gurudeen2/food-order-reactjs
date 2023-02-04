import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemHandlerForCart = (item) => {};

  const removeItemHandlerForCart = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandlerForCart,
    removeItem: removeItemHandlerForCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
