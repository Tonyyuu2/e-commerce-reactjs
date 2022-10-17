import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { useEffect } from "react";
import ShopItems from "../shop/ShopItems";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products?.map((product) => (
            <ShopItems key={product.id} item={product} />
          ))}
      </CategoryContainer>
    </>
  );
}

export default Category;
