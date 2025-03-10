import React from 'react';

export default function PageTitle() {	
	return (
		<div className="sch-input">
			<input type="text" className="form-control" name="allKeyWord" placeholder="검색어 입력" title="검색어 입력" readOnly/>
			<button type="submit" className="btn sch-btn">
				<i className="ri-search-2-line"></i><span className="sr-only">검색</span>
			</button>
		</div>
	);
}
