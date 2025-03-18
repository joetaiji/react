import React from 'react';
import Search from '../../components/Search.js';
import Filter from '../../components/Filter.js';
import Table from '../../components/Table.js';
import Pagination from '../../components/Pagination.js';
import CellSetting from '../../components/CellSetting.js';
import './Project.css';

const Project = () => {
	return (
		<div className="project-container">
			<Search />
			<Filter />
			<div className="btn-area both mt3 mb2">
				<button type="button" class="btn sm btn-popup-view" data-target="create" data-id="project-create" onClick={() => {
					document.querySelector('.popup-wrap').style.display = 'block';
					document.querySelector('.popup').classList.add('opened-layer');
				}}>
					<i class="ri-add-line"></i>프로젝트 등록
				</button>
				<CellSetting />
			</div>
			<Table />
			<Pagination />
		</div>
	);
};

export default Project;