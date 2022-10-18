import React, { useContext } from "react";
import {
  Footer,
  ImgTag,
  Name,
  Price,
  ProductCardContainer,
  ShopButton,
} from "./shopitems.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import { CartContext } from "../../context/cart.context";

function ShopItems({ item }) {
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => addItemToCart(item);

  return (
    <ProductCardContainer>
      <ImgTag src={item.imageUrl} alt={item.name} />
      <Footer>
        <Name>{item.name}</Name>
        <Price>{item.price}</Price>
      </Footer>
      <ShopButton onClick={addToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to cart
      </ShopButton>
    </ProductCardContainer>
  );
}

export default ShopItems;
