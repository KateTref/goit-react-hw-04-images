import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const handleImageClick = evt => {
    if (evt.currentTarget === evt.target) {
      toggleModal();
    }
  };

  return (
    <div className={css.imageGalleryItem}>
      <li>
        <img
          className={css.imageGalleryImage}
          onClick={handleImageClick}
          src={image.webformatURL}
          alt={image.tags}
          width="340"
        />
      </li>
      {showModal && (
        <Modal
          modalImage={image}
          onClose={handleImageClick}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
}

export default ImageGalleryItem;
