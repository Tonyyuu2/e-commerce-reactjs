import React from "react";
import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { CategoriesContext } from "../../context/categories.context";
import "./shop.styles.scss";

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);

  const categoryPreview = Object.keys(categoriesMap).map((title) => {
    const products = categoriesMap[title];
    return (
      <CategoryPreview key={title} title={title} products={products} />
    );
  })

  return (
    <div className="shop-container">
      {categoryPreview}
    </div>
  );
}

export default Shop;
