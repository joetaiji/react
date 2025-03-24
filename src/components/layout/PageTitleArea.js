import React from 'react';
import PageTitle from './PageTitle';
import Util from '../ui/Util';
import styles from'./PageTitleArea.module.css';

const PageTitleArea = () => {
    return (
        <div className={styles['page-title-area']}>
			<PageTitle />
			<Util />
        </div>
    );
};

export default PageTitleArea; 