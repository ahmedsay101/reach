import React, {useEffect, useState} from 'react';
import "./header.scss";
import logo from "../../assets/images/ytlogo.png";
import mobileLogo from "../../assets/images/mobile.png";
import SearchBar from '../SearchBar/searchBar';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    setMobileView(window.innerWidth < 600);
    window.addEventListener("resize", () => setMobileView(window.innerWidth < 600));
  }, []);

  return (
    <div className='main-header-container'>
        <div className='main-header-content'>
            <Link to="/">
              <img className="logo" src={mobileView ? mobileLogo : logo} alt="youtube logo" />
            </Link>
            <SearchBar />
        </div>
    </div>

  );
}

export default Header;