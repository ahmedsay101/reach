import React from 'react';
import "./home.scss";
import yt from "../../assets/images/yt.png";

function Home() {
  return (
    <div className='home-container'>
      <img className='home-image' src={yt} />
    </div>
  );
}

export default Home;