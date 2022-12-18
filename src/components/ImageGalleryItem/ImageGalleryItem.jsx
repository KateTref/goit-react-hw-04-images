import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <div className={css.imageGalleryItem}>
      <li>
        <img
          className={css.imageGalleryImage}
          onClick={toggleModal}
          src={image.webformatURL}
          alt={image.tags}
          width="340"
        />
      </li>
      {showModal && (
        <Modal
          modalImage={image}
          onClose={toggleModal}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
}

export default ImageGalleryItem;
