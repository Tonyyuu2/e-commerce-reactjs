import {
  Body,
  DirectoryItemContainer,
  BackgroundImage,
} from "./directoryItem.styles.jsx";

import React from "react";

function DirectoryItem({ category }) {
  const { id, imageUrl, title } = category;

  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
