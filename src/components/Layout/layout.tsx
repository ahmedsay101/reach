import React from 'react';
import Header from '../Header/header';
import LoadingBar from '../LoadingBar/loadingBar';
import "./layout.scss";

interface layoutProps { 
    children: React.ReactNode
}

function Layout(props: layoutProps) {
  return (
    <div className='main-container'>
        <LoadingBar />
        <Header />
        <div className='main-content-container'>
            <div className='main-content'>
                {props.children}
            </div>
        </div>
    </div>
  );
}

export default Layout;