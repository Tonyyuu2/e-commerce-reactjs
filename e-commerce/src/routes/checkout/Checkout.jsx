import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles.jsx";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  const checkoutItems = cartItems.map((cartItem) => {
    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
  });

  return (
    <CheckoutContainer>
      <h2>Your Cart</h2>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {checkoutItems}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
}

export default Checkout;
