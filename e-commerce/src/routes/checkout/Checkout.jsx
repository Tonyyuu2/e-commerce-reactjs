import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  const checkoutItems = cartItems.map((cartItem) => {
    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
  });

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
      {checkoutItems}
      <span className="total">Total: 0</span>
    </div>
  );
}

export default Checkout;
