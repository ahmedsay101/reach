import React from 'react';
import "./loadingBar.scss";

function LoadingBar() {
  return (
    <div className='loading-bar-container'>
        <span className='loading-bar-progress'></span>
    </div>
  );
}

export default LoadingBar;