import React from "react";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cartIcon.styles.jsx";
import { CartContext } from "../../context/cart.context";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon
        style={{ width: "24px", height: "24px" }}
        className="shopping-icon"
      />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
