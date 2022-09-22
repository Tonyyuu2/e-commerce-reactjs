import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";

function Checkout() {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <h2>Your Cart</h2>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <h2>{cartItem.name}</h2>
              <span>{cartItem.quantity}</span>
              <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
        <span className="total">Total: 0</span>
    </div>
  );
}

export default Checkout;
