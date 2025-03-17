import React from 'react';
import Search from '../../components/Search.js';
import Filter from '../../components/Filter.js';
import Table from '../../components/Table.js';
import Pagination from '../../components/Pagination.js';
import './Project.css';

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