import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from '../../svg/Search.svg';
class SearchBar extends Component {
  state = {
    request: '',
  };

  handleRequestChange = evt => {
    this.setState({ request: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    const { request } = this.state;
    evt.preventDefault();
    if (request.trim() === '') {
      return;
    }
    this.props.onSubmit(request);
    this.setState({ request: '' });
    console.log(this.state.request);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <SearchIcon width="30" height="30" />
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.handleRequestChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
