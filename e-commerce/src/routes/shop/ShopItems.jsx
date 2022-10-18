import React, { useContext } from "react";
import { Footer, ProductCardContainer } from "./shopitems.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import { CartContext } from "../../context/cart.context";

function ShopItems({ item }) {
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => addItemToCart(item);

  return (
    <ProductCardContainer>
      <img src={item.imageUrl} alt={item.name} />
      <Footer>
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </Footer>
      <Button onClick={addToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}

export default ShopItems;
