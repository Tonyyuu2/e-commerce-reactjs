import { CartDropdownContainer, CartItems } from "./cartDropDown.styles.jsx";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const cartItemList = cartItems.map((item) => {
    return <CartItem key={item.id} cartItem={item} />;
  });

  return (
    <CartDropdownContainer className="cart-dropdown-container">
      <CartItems className="cart-items">{cartItemList}</CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropDown;
