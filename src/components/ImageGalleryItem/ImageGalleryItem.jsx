import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

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
      <>
        <li>
          <img
            onClick={this.handleImageClick}
            src={this.props.image.webformatURL}
            alt={this.props.image.tags}
            width="300"
          />
        </li>
        {this.state.showModal && (
          <Modal
            modalImage={this.props.image}
            onClose={this.handleImageClick}
            toggleModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default imageGalleryItem;
