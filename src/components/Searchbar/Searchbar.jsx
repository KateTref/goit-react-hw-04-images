import React, { Component } from 'react';
import css from './Searchbar.module.css';
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
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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
