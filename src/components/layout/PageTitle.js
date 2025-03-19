import React from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_TITLES } from '../../constants/pageTitles';
import ItemLayer from '../ui/ItemLayer';
import './PageTitle.css';

const PageTitle = () => {
	const location = useLocation();
	const title = PAGE_TITLES[location.pathname] || '대시보드';
	const currentPath = location.pathname;

	// 필터가 필요한 경로 정의
	const filterPaths = ['/sales', '/sales/flow', '/sales/performance', '/expense', '/expense/outsourcing', '/expense/management'];

	return (
		<div className="page-title-wrap">
			<h2 className="page-title">{title}</h2>
			{filterPaths.includes(currentPath) && <ItemLayer itemName="typeItem"/>}
		</div>
	);
};

export default PageTitle; 