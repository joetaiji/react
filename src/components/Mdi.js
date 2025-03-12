import React from 'react';

import '../css/mdi.css';

export default function Mdi() {
	
	return (
		<div className="mdi-area">
			<div className="mdi-tabs swiper">
				<div className="mdi-item-group swiper-wrapper">
					<a href="dashboard.html" data-page="menu1"
						className="mdi-item swiper-slide active"><i className="ri-home-3-fill"></i><span>대시보드</span><i
							className="ri-close-line"></i></a>
				</div>
			</div>
			<div className="tab-control">
				<button className="swiper-button swiper-button-prev btn xsm"><i
						className="ri-arrow-left-s-line"></i></button>
				<button className="swiper-button swiper-button-next btn xsm"><i
						className="ri-arrow-right-s-line"></i></button>
				<button className="btn xsm mdi-all-close"><i className="ri-close-line"></i> 전체닫기</button>
			</div>
			<div className="user-group">
				<span className="user-icon"><img src="/images/layout/photo.png" /></span>
				<span className="user-icon">허</span>
				<span className="user-icon"><img src="/images/layout/photo.png" /></span>
				<span className="user-icon">김</span>
				<span className="user-icon">조 </span>
				<span className="user-sum">+24명</span>
			</div>
		</div>
	);
}
