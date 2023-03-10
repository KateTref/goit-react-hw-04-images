import React, { useState, useEffect } from 'react';
import SearchBar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { getImages } from 'service/api';
import LoadMore from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

function App() {
  const [request, setRequest] = useState('');
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleFormSubmit(request) {
    setImages([]);
    setPage(1);
    setRequest(request);
  }

  const getMoreImages = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    async function onGetImages() {
      try {
        if (request !== '') {
          setIsLoading(true);
          setError(null);
          const { totalPages, images } = await getImages(request, page);
          setImages(prevState => [...prevState, ...images]);
          setTotalPages(totalPages);
        }
      } catch {
        setError('We can not get data. Try again');
      } finally {
        setIsLoading(false);
      }
    }
    onGetImages();
  }, [request, page]);

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <div className="container">
        {isLoading && <Loader className="loader" />}
        {images.length === 0 && request !== '' && !error && !isLoading && (
          <p>Nothing found for you request</p>
        )}
        <ImageGallery images={images}></ImageGallery>
        {error && <p>{error}</p>}
        {images.length > 0 && page < totalPages && isLoading && (
          <LoadMore getMoreImages={getMoreImages} />
        )}
      </div>
    </>
  );
}

export default App;
