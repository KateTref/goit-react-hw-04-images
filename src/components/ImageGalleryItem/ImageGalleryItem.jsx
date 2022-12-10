import React from 'react';

const imageGalleryItem = ({ image }) => {
  return (
    <li>
      <img src={image.webformatURL} alt={image.tags} width="300" />
    </li>
  );
};

export default imageGalleryItem;
