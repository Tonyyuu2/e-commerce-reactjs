import React from "react";
import { Outlet } from "react-router-dom";

import CategoryItem from "../../components/category-item/CategoryItem";

function Home() {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  const categoryItem = categories.map((category) => {
    return <CategoryItem key={category.id} category={category} />;
  });

  return (
    <div>
      <Outlet />
      <div className="categories-container">
        <div className="categories-container">{categoryItem}</div>
      </div>
    </div>
  );
}

export default Home;