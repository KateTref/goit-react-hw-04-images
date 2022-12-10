import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </ul>
  );
};

export default ImageGallery;
