import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTitle from './PageTitle.js';
import Button from './Button.js';
import Search from './Search.js';
import Filter from './Filter.js';
import Table from './Table';
import Pagination from './Pagination.js';
import Footer from './Footer.js';
import Popup from './Popup.js';
import Dashboard from './Dashboard.js';
import '../css/App.css';

const App = () => {
  return (
    <Router>
      <div className="page-contents">
        <PageTitle />
        <Button />
       
		<Routes>
          <Route path="/project" element={
			<>
			<Search />
			<Filter />
			<button 
			className="btn btn-primary"
			onClick={() => {
				document.querySelector('.popup-wrap').style.display = 'block';
				document.querySelector('.popup').classList.add('opened-layer');
			}}
		>
			프로젝트 등록
		</button>
			<Table />
			
        <Pagination />
			</>
			} />
          <Route path="/dashboard" element={
			<Dashboard />
			} />
        </Routes>

        <Footer />
		<Popup />
      </div>
    </Router>
  );
};

export default App;