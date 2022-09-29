import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchIcon from '../../assets/icons/SearchIcon';
import "./searchBar.scss";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(searchValue && searchValue.length > 0) navigate(`/search?keyword=${searchValue}`);
  }

  return (
    <form className="search-form" action="#" onSubmit={handleSubmit}>
      <input className='search-input' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search For Channels, Videos..' />
      <button className="search-button">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;