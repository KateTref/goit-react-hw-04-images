import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class imageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleImageClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.toggleModal();
    }
  };

  render() {
    return (
      <div className={css.imageGalleryItem}>
        <li>
          <img
            className={css.imageGalleryImage}
            onClick={this.handleImageClick}
            src={this.props.image.webformatURL}
            alt={this.props.image.tags}
            width="340"
          />
        </li>
        {this.state.showModal && (
          <Modal
            modalImage={this.props.image}
            onClose={this.handleImageClick}
            toggleModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default imageGalleryItem;
