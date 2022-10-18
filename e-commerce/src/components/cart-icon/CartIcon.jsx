import React from "react";
import { useContext } from "react";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cartIcon.styles";
import { CartContext } from "../../context/cart.context";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
