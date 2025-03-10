import React from 'react';
import FilterItem from './FilterItem.js';
import '../css/filter.css';

export default function Filter() {	
	return (
		<div className="filter active">
			<div className="filter-cont">
				<FilterItem itemName="typeItem"/>
				<FilterItem itemName="deptItem"/>
				<FilterItem itemName="corpItem"/>
				<FilterItem itemName="managerItem"/>
				<FilterItem itemName="statusItem"/>
			</div>	
			<div className="filter-setting"></div>
	
			<div className="filter-foot">
				<button className="btn-filter-reset" disabled=""><i className="ri-restart-line"></i> 초기화</button>
				<div className="filter-save">
					<input type="checkbox" id="filterSave" disabled="" /><label htmlFor="filterSave">해당 조건 다음에도 설정</label>
					<button className="btn-filter-result" disabled=""><strong>136</strong>개의 조건 검색 결과</button>
				</div>
			</div>
			<button className="btn-filter-open"><i className="ri-skip-down-line"></i></button>
		</div>
	);
}
