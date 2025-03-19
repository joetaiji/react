import React from 'react';
import PageTitle from './PageTitle';
import Button from '../ui/Button';
import './PageTitleArea.css';

const PageTitleArea = () => {
    return (
        <div className="page-title-area">
			<PageTitle />
			<Button />
        </div>
    );
};

export default PageTitleArea; 