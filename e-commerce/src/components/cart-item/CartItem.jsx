import React from "react";
import { CartItemContainer, ItemDetails } from "./cartItem.styles.jsx";

function CartItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      <img style={{ width: "30%" }} src={imageUrl} alt={name} />
      <ItemDetails>
        <span style={{ fontsize: "16px" }}>{name}</span>
        <span style={{ fontsize: "16px" }}></span>
        {quantity} x ${price}
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
