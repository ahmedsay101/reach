import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Layout from './components/Layout/layout';
import Search from './pages/SearchResults/searchResults';
import Home from './pages/Home/home';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
