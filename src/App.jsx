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
  };

  handleFormSubmit = request => {
    this.setState({ images: [], page: 1 });
    this.setState({ request });
  };

  async componentDidUpdate(_, prevState) {
    const { request, page } = this.state;
    if (prevState.request !== request || prevState.page !== page) {
      this.setState({ isLoading: true });
      const { totalPages, hits } = await getImages(request, page);
      this.setState(prevState => {
        return { images: [...prevState.images, ...hits], totalPages };
      });
      this.setState({ isLoading: false });
    }
  }

  getMoreImages = currentPage => {
    this.setState({ isLoading: true });
    this.setState({ page: currentPage + 1 });
    this.setState({ isLoading: false });
  };

  render() {
    const { images, totalPages, page, isLoading } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={this.state.images} />
        {images.length > 0 && page <= totalPages && (
          <LoadMore
            getMoreImages={this.getMoreImages}
            currentPage={this.state.page}
          />
        )}
      </>
    );
  }
}

export default App;
