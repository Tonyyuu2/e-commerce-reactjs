import React, { useContext } from "react";
import "./shopitems.styles.scss";
import Button from "../../components/button/Button";

function ShopItems({ item }) {
  return (
    <div className="product-card-container">
      <img src={item.imageUrl} alt={item.name} />
      <div className="footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
}

export default ShopItems;
