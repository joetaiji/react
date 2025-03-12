import React from 'react';
import Search from './Search.js';
import Filter from './Filter.js';
import Table from './Table.js';
import Pagination from './Pagination.js';
import '../css/project.css';

const Project = () => {
  return (
	<div className="project-container">
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
	</div>
  );
};

export default Project;