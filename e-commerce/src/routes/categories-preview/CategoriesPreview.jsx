import React from "react";
import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { CategoriesContext } from "../../context/categories.context";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  const categoryPreview = Object.keys(categoriesMap).map((title) => {
    const products = categoriesMap[title];
    return (
      <CategoryPreview key={title} title={title} products={products} />
    );
  })

  return (
    <>
      {categoryPreview}
    </>
  );
}

export default CategoriesPreview;
