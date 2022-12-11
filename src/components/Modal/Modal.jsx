import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.modalImage;
    return createPortal(
      <div className={css.overlay} onClick={this.props.onClose}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tags} width="940" />
        </div>
      </div>,
      modalRoot
    );
  }
}
