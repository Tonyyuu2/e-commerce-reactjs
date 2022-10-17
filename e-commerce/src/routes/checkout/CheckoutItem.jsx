import React, { useContext } from "react";
import {Arrow, CheckoutItemContainer, ImageContainer, ImgTag, Name, Price, Quantity, RemoveButton, Value} from "./checkoutItem.styles.jsx";
import { CartContext } from "../../context/cart.context";

function CheckoutItem({ cartItem }) {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearHandler = () => clearItemFromCart(cartItem);
  const incrementHandler = () => addItemToCart(cartItem);
  const decrementHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ImgTag src={cartItem.imageUrl} alt={cartItem.name} />
      </ImageContainer>
      <Name>{cartItem.name}</Name>
      <Quantity>
        <Arrow onClick={decrementHandler}>
          &#10094;
        </Arrow>
        <Value>{cartItem.quantity}</Value>
        <Arrow onClick={incrementHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{cartItem.price}</Price>
      <RemoveButton onClick={clearHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
