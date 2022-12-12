import React, { Component } from 'react';
import SearchBar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { getImages } from 'service/api';
import LoadMore from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

class App extends Component {
  state = {
    request: '',
    images: [],
    totalPages: 0,
    page: 1,
    isLoading: false,
    error: null,
  };

  handleFormSubmit = request => {
    this.setState({ images: [], page: 1 });
    this.setState({ request });
  };

  async componentDidUpdate(_, prevState) {
    const { request, page } = this.state;
    if (prevState.request !== request || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const { totalPages, hits } = await getImages(request, page);
        this.setState(prevState => {
          return { images: [...prevState.images, ...hits], totalPages };
        });
      } catch {
        this.setState({ error: 'We can not get data. Try again' });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  getMoreImages = currentPage => {
    this.setState({ isLoading: true });
    this.setState({ page: currentPage + 1 });
    this.setState({ isLoading: false });
  };

  render() {
    const { request, images, totalPages, page, isLoading, error } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <div className="container">
          {isLoading && <Loader className="loader" />}
          {images.length === 0 && request !== '' && !error && !isLoading && (
            <p>Nothing found for you request</p>
          )}
          <ImageGallery
            images={images}
            onClick={this.toggleModal}
          ></ImageGallery>
          {error && <p>{error}</p>}
          {images.length > 0 && page < totalPages && (
            <LoadMore getMoreImages={this.getMoreImages} currentPage={page} />
          )}
        </div>
      </>
    );
  }
}

export default App;
