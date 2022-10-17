import React, { useContext } from "react";
import "./shopitems.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import { CartContext } from "../../context/cart.context";

function ShopItems({ item }) {
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => addItemToCart(item);

  return (
    <div className="product-card-container">
      <img src={item.imageUrl} alt={item.name} />
      <div className="footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <Button onClick={addToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to cart
      </Button>
    </div>
  );
}

export default ShopItems;
