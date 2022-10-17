import React from "react";
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
} from "./categoryPreview.styles.jsx";
import ShopItems from "../../routes/shop/ShopItems";
import { Link } from "react-router-dom";

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>
          {title?.toUpperCase()}
        </TitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map((product) => {
            return <ShopItems key={product.id} item={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
