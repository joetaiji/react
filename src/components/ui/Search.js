import React from 'react';
import styles from './Search.module.css';
export default function PageTitle() {	
	return (
		<div className={styles['sch-input']}>
			<input type="text" className={styles['form-control']} name="allKeyWord" placeholder="검색어 입력" title="검색어 입력" readOnly/>
			<button type="submit" className={`${styles['sch-btn']} btn`}>
				<i className="ri-search-2-line"></i><span className="sr-only">검색</span>
			</button>
		</div>
	);
}
