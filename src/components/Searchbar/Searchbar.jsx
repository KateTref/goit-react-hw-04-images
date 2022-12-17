import css from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from '../../svg/Search.svg';
import { useState } from 'react';
function SearchBar({ onSubmit }) {
  const [request, setRequest] = useState('');

  const handleRequestChange = evt => {
    setRequest(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (request.trim() === '') {
      return;
    }
    onSubmit(request);
    setRequest('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}></span>
          <SearchIcon width="30" height="30" className={css.searchSvg} />
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="request"
          value={request}
          onChange={handleRequestChange}
        />
      </form>
    </header>
  );
}

export default SearchBar;
