import React, { useState } from 'react';
import Search from '../../components/ui/Search';
import Filter from '../../components/ui/Filter';
import Table from '../../components/ui/Table';
import Pagination from '../../components/ui/Pagination';
import CellSetting from '../../components/ui/CellSetting';
import Popup from '../../components/ui/Popup';
import './Project.css';

const Project = () => {
	const [popupState, setPopupState] = useState(null);

	const handlePopupClick = (e) => {
		const button = e.currentTarget;
		const popupId = button.getAttribute('data-id');
		const target = button.getAttribute('data-target');
		
		setPopupState({ id: popupId, target });
	};

	const handlePopupClose = () => {
		setPopupState(null);
	};

	return (
		<div className="project-container">
			<Search />
			<Filter />
			<div className="btn-area both mt3 mb2">
				<button 
					type="button" 
					className="btn sm btn-popup-view" 
					data-target="create" 
					data-id="project-create"
					onClick={handlePopupClick}
				>
					<i className="ri-add-line"></i>프로젝트 등록
				</button>
				<CellSetting />
			</div>
			<Table onPopupClick={handlePopupClick} />
			<Pagination />

			{popupState && (
				<div className="popup-wrap" style={{ display: 'flex' }}>
					<Popup 
						id={popupState.id}
						target={popupState.target}
						onClose={handlePopupClose}
					/>
				</div>
			)}
		</div>
	);
};

export default Project;