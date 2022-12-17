import css from './Button.module.css';

function LoadMore({ getMoreImages }) {
  return (
    <button
      className={css.loadMore}
      type="button"
      onClick={() => getMoreImages()}
    >
      Load more
    </button>
  );
}

export default LoadMore;
