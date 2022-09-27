import React from 'react';
import "./header.scss";
import logo from "../../assets/images/ytlogo.png";
import SearchBar from '../SearchBar/searchBar';

function Header() {
  return (

    <div className='main-header-container'>
        <div className='main-header-content'>
            <img className="logo" src={logo} alt="youtube logo" />
            <SearchBar />
        </div>
    </div>

  );
}

export default Header;