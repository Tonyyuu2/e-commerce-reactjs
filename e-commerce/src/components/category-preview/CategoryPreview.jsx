import React from "react";
import "./categoryPreview.styles.scss";
import ShopItems from "../../routes/shop/ShopItems";
import { Link } from "react-router-dom";

function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>{title?.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, i) => i < 4)
          .map((product) => {
            return <ShopItems key={product.id} item={product} />;
          })}
      </div>
    </div>
  );
}

export default CategoryPreview;
