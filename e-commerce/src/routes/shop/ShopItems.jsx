import React from "react";
import "./shopitems.styles.scss";
import Button from "../../components/button/Button";

function ShopItems({ item }) {
  return (
    <div className="product-card-container">
      <img src={item.imageUrl} alt='Product Images'/>
      <div className="footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
    </div>
  );
}

export default ShopItems;
