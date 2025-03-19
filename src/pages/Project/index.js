import React from 'react';
import Search from '../../components/ui/Search';
import Filter from '../../components/ui/Filter';
import Table from '../../components/ui/Table';
import Pagination from '../../components/ui/Pagination';
import CellSetting from '../../components/ui/CellSetting';
import './Project.css';

const Project = () => {
	return (
		<div className="project-container">
			<Search />
			<Filter />
			<div className="btn-area both mt3 mb2">
				<button type="button" className="btn sm btn-popup-view" data-target="create" data-id="project-create" onClick={() => {
					document.querySelector('.popup-wrap').style.display = 'block';
					document.querySelector('.popup').classList.add('opened-layer');
				}}>
					<i className="ri-add-line"></i>프로젝트 등록
				</button>
				<CellSetting />
			</div>
			<Table />
			<Pagination />
		</div>
	);
};

export default Project;