import React from "react";
import { useContext } from "react";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cartIcon.styles.jsx";
import { CartContext } from "../../context/cart.context";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
