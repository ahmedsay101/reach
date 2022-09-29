import React from 'react';
import "./header.scss";
import logo from "../../assets/images/ytlogo.png";
import SearchBar from '../SearchBar/searchBar';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <div className='main-header-container'>
        <div className='main-header-content'>
            <Link to="/">
              <img className="logo" src={logo} alt="youtube logo" />
            </Link>
            <SearchBar />
        </div>
    </div>

  );
}

export default Header;