const LoadMore = ({ getMoreImages, currentPage }) => {
  return (
    <button type="button" onClick={() => getMoreImages(currentPage)}>
      Load more
    </button>
  );
};

export default LoadMore;
