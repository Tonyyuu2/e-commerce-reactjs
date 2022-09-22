import React, { useContext } from "react";
import "./checkoutItem.styles.scss";
import { CartContext } from "../../context/cart.context";

function CheckoutItem({ cartItem }) {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearHandler = () => clearItemFromCart(cartItem);
  const incrementHandler = () => addItemToCart(cartItem);
  const decrementHandler = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementHandler}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={incrementHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={clearHandler}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
