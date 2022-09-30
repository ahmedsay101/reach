import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import SearchIcon from '../../assets/icons/SearchIcon';
import RemoveIcon from '../../assets/icons/xIcon';
import "./searchBar.scss";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const [mobileView, setMobileView] = useState(false);
  const [showMobileSearchForm, setShowMobileSearchForm] = useState(false);

  useEffect(() => {
    setMobileView(window.innerWidth < 600);
    window.addEventListener("resize", () => setMobileView(window.innerWidth < 600));
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(searchValue && searchValue.length > 0) navigate(`/search?keyword=${searchValue}`);
  }

  return (
    mobileView ? 
      <div className='mobile-search-form-container'>
        {showMobileSearchForm ? <form className='mobile-search-form' onSubmit={handleSubmit}>
          <input className='mobile-search-input' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search For Channels, Videos..' />
          <input type="submit" id="submitbtn" style={{display: "none"}} />
          <button className="search-exit" onClick={(e) => {
            e.preventDefault();
            setShowMobileSearchForm(false);
          }}>
            <RemoveIcon />
          </button>
        </form> : <span className="search-value-placeholder">{searchValue}</span>}
        <button className="mobile-search-btn" onClick={() => setShowMobileSearchForm(true)}>
          <SearchIcon fill="#fff" />
        </button>
      </div>
    :
    <form className="search-form" action="#" onSubmit={handleSubmit}>
      <input className='search-input' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search For Channels, Videos..' />
      <button className="search-button">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;