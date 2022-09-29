import React, { useEffect, useState } from 'react';
import ReactDOM  from 'react-dom';
import "./loadingBar.scss";

interface loadingBarProps { 
  percentage: number,
  destroy: any
}

function LoadingBar(props: loadingBarProps) {

  const [progress, setProgress] = useState(props.percentage);

  useEffect(() => {
    setProgress(p => p += props.percentage);
  }, [props.percentage]);

  useEffect(() => {
    if(progress >= 100) {
      setTimeout(() => {
        props.destroy();
      }, 500);
    }
  }, [progress]);

  if(typeof window !== "undefined") {
      return ReactDOM.createPortal(
      (
      <div className='loading-bar-container'>
        <span className='loading-bar-progress' style={{width: `${progress}%`}}></span>
      </div>
      )
      , document.getElementById("loadingBar")!);
  }
  else {
      return null;
  }
}

export default LoadingBar;