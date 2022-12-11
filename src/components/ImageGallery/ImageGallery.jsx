import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.list}>
      {images.map(image => {
        return (
          <ImageGalleryItem key={image.id} image={image} onModal={onClick} />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
