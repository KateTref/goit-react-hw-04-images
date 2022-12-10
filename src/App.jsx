import React, { Component } from 'react';
import SearchBar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { getImages } from 'service/api';

class App extends Component {
  state = {
    request: '',
    images: [],
    totalPages: 0,
    page: 1,
  };

  handleFormSubmit = request => {
    this.setState({ request });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { request, page } = this.state;
    if (prevState.request !== request || prevState.page !== page) {
      const { totalPages, hits } = await getImages(request, page);
      this.setState(prevState => {
        return { images: [...prevState.images, ...hits], totalPages };
      });
    }
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}

export default App;
