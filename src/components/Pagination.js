import React from 'react';
import '../css/pagination.css';

export default function Table() {	
return (
	<div className="pagination">
		<a href="#" className="page-navi prev">이전</a>
		<div className="page-links">
			<a href="#" className="page-link">1</a>
			<a href="#" className="page-link">2</a>
			<a href="#" className="page-link">3</a>
			<a href="#" className="page-link active">4</a>
			<a href="#" className="page-link">5</a>
			<a href="#" className="page-link">6</a>
		</div>
		<a href="#" className="page-navi next">다음</a>
	</div>
);
}
