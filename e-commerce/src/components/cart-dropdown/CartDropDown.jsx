import "./cartDropDown.styles.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useContext, useState } from "react";

import { CartContext } from "../../context/cart.context";

function CartDropDown() {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  console.log(cartItems)

  return (
    <>
      <div className="cart-dropdown-container">
        <header>
          <h1>Your Shopping Cart</h1>
        </header>
        <div id="header-table">
          <span>Image</span>
          <span>Product</span>
          <span>Amount</span>
          <span>Price</span>
          <span>Actions</span>
        </div>
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <div id="options-down">
          <Button onClick={() => setIsCartOpen(false)}>CLOSE</Button>
          <Button>CHECKOUT</Button>
        </div>
      </div>
      <div id="exit" onClick={() => setIsCartOpen(false)} />
    </>
  );
}

export default CartDropDown;
