import React from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_TITLES } from '../../constants/pageTitles';
import './PageTitle.css';

const PageTitle = () => {
	const location = useLocation();
	const title = PAGE_TITLES[location.pathname] || '대시보드';

	return (
		<div className='page-title-wrap'>
			<h2 className='page-title'>{title}</h2>
		</div>
	);
};

export default PageTitle; 