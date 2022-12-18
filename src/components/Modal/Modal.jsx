import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ modalImage, onClose, toggleModal }) {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return window.removeEventListener('keydown', handleKeyDown);
  }, [toggleModal]);

  const { largeImageURL, tags } = modalImage;
  return createPortal(
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} width="940" />
      </div>
    </div>,
    modalRoot
  );
}
