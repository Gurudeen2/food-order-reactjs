import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      [
      {[{ id: "c1", name: "Sushi", price: 22.99, amount: 2 }].map(
        (cartItem) => {
          return <li key={cartItem.id}>{cartItem.name}</li>;
        }
      )}
      ]
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>16.99</span>
      </div>
      <div className={classes.button}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
