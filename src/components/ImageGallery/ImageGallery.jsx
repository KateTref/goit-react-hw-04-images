import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </ul>
  );
};

export default ImageGallery;
