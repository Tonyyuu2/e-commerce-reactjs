import {
  Body,
  DirectoryItemContainer,
  H2Format,
  PFormat,
  BackgroundImage,
} from "./directoryItem.styles.jsx";

import React from "react";

function DirectoryItem({ category }) {
  const { id, imageUrl, title } = category;

  return (
    <  DirectoryItemContainer key={id} >
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <H2Format>{title}</H2Format>
        <PFormat>Shop Now</PFormat>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
