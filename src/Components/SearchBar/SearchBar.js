import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
      />
      <a onClick={props.onClick}>SEARCH</a>
    </div>
  );
}

export default SearchBar;
