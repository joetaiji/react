import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTitle from './PageTitle.js';
import Button from './Button.js';
import Search from './Search.js';
import Filter from './Filter.js';
import Table from './Table';
import Pagination from './Pagination.js';
import Footer from './Footer.js';
import Result from './Result';
import '../css/App.css';

const App = () => {
  return (
    <Router>
      <div className="page-contents">
        <PageTitle />
        <Button />
        <Search />
        <Filter />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Pagination />
        <Footer />
      </div>
    </Router>
  );
};

export default App;