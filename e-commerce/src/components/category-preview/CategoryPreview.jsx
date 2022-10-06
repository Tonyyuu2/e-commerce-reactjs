import React from "react";
import "./categoryPreview.styles.scss";
import ShopItems from "../../routes/shop/ShopItems";

function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title?.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, i) => i < 4)
          .map((product) => {
            return <ShopItems key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}

export default CategoryPreview;
