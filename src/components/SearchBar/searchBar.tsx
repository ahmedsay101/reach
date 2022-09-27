import React from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import "./searchBar.scss";

function SearchBar() {
  return (
    <form className="search-form" action="#">
      <input className='search-input' placeholder='Search For Channels, Videos..' />
      <button className="search-button">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;