import css from './Button.module.css';

const LoadMore = ({ getMoreImages, currentPage }) => {
  return (
    <button
      className={css.loadMore}
      type="button"
      onClick={() => getMoreImages(currentPage)}
    >
      Load more
    </button>
  );
};

export default LoadMore;
