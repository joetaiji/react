import React from 'react';

export default function FilterItem() {	
	return (
		<div className="filter-item">
			<div className="item-title">
				<strong>프로젝트 분류</strong>
			</div>
			<button className="item-add" aria-expanded="false">
				<i className="ri-add-circle-fill"></i><span className="sr-only">열기</span>
			</button>
			<div className="item-cont"></div>
			<div className="item-layer">
				<div className="item-title">
					<strong></strong>
					<button className="tooltip">
						<i className="ri-information-fill"></i>
						<span>원하는 분류 태그가 없으면 직접 입력</span>
					</button>
				</div>
				<div className="item-cont">
					<input type="text" className="input-text form-control" placeholder="직접입력" />
				</div>
				<div className="item-group">
					<div className="item" data-item="type1"><button type="button" className="item-btn">홈페이지 구축</button></div>
					<div className="item" data-item="type2"><button type="button" className="item-btn">유지보수</button></div>
					<div className="item" data-item="type3"><button type="button" className="item-btn">디자인</button></div>
					<div className="item" data-item="type4"><button type="button" className="item-btn">클라우드 이관</button></div>
					<div className="item" data-item="type5"><button type="button" className="item-btn">홍보/이벤트</button></div>
					<div className="item" data-item="type6"><button type="button" className="item-btn">컨설팅</button></div>
					<div className="item" data-item="type7"><button type="button" className="item-btn">내부거래</button></div>
				</div>
			</div>
		</div>
		
	);
}
