import React, { Fragment } from "react";
import { useContext } from "react";
import ShopItems from "./ShopItems";
import { CategoriesContext } from "../../context/categories.context";
import "./shop.styles.scss";

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log("Object.keys(categoriesMap) :", Object.keys(categoriesMap));

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => {
                return <ShopItems key={product.id} item={product} />;
              })}
            </div>
          </Fragment>
        );
      })}
    </>
  );
}

export default Shop;
