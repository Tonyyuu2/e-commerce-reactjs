import React from "react";
import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { CategoriesContext } from "../../context/categories.context";
import "./shop.styles.scss";

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log("Object.keys(categoriesMap) :", Object.keys(categoriesMap));

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
        <CategoryPreview key={title} title={title} products={products}/>
        )
      })}
    </div>
  );
}

export default Shop;
