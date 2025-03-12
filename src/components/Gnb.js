import React from 'react';

const Gnb = () => {
 
  return (
    <div id="sideNav" className="left-menu sub01">
		<div className="snb-head">
			<h1 className="logo"><img src="/images/layout/logo.svg" alt="planI" /></h1>
			<div className="member-area">
				<div className="member">
					<div className="info">
						<span className="photo"><img src="/images/layout/photo.png" alt="" /></span>
						<strong className="name">김소영<span className="role">PM</span></strong>
						<span className="info-dept">
							<span className="dept">디지털전환사업부</span>
							<span className="team">사업2팀</span>
						</span>
					</div>
					<div className="btn-area">
						<a href="" className="btn sm mypage" data-page="mypage">마이페이지</a>
						<button className="btn sm logout">로그아웃</button>
					</div>
				</div>
			</div>
		</div>
		<nav className="snb-list">
			<ul>
				<li className="">
					<a href="/dashboard" data-page="menu1" className="selected"><i className="ri-home-3-fill"></i><span>대시보드</span></a>
				</li>
				<li className="active">
					<a href="/project" data-page="menu2" className="selected"><i className="ri-stack-fill"></i><span>프로젝트</span></a>
				</li>
				<li className="is-depth3">
					<a href="/sales" data-page="menu3"><i className="ri-bar-chart-fill"></i><span>매출 관리</span></a>
					<ul>
						<li className=""><a href="" data-page="menu3" className="selected">매출 통계</a></li>
						<li className=""><a href="" data-page="menu3-2" className="selected">현금 흐름</a></li>
						<li className=""><a href="" data-page="menu3-3" className="selected">전체 실적(계약)</a></li>
					</ul>
				</li>
				<li className="is-depth3">
					<a href="/expendse" data-page="menu4"><i className="ri-coin-fill"></i><span>지출 관리</span></a>
					<ul>
						<li className=""><a href="" data-page="menu4" className="selected">지출 통계</a></li>
						<li className=""><a href="" data-page="menu4-2" className="selected">직접비(외주비)</a></li>
						<li className=""><a href="" data-page="menu4-3" className="selected">비용 관리</a></li>
					</ul>
				</li>
				<li className="">
					<a href="/income" data-page="menu5" className="selected"><i className="ri-ball-pen-fill"></i><span>실적 관리(손익계산)</span></a>
				</li>
				<li className="">
					<a href="/vendor" data-page="menu6" className="selected"><i className="ri-service-fill"></i><span>거래처</span></a>
				</li>
				<li className="is-depth3">
					<a href="/setting" data-page="menu7"><i className="ri-settings-2-fill"></i><span>환경설정</span></a>
					<ul>
						<li className=""><a href="" data-page="menu7" className="selected">조직도</a></li>
						<li><a href="" data-page="menu7-2">직원정보</a></li>
						<li><a href="" data-page="menu7-3">직무정보</a></li>
						<li><a href="" data-page="menu7-4">목표 관리</a></li>
						<li><a href="" data-page="menu7-5">내부 노임단가</a></li>
						<li><a href="" data-page="menu7-6">SW노임단가</a></li>
					</ul>
				</li>
			</ul>
		</nav>
		<button className="snb-close" aria-expanded="false">
			<i className="ri-angle-right"></i><span className="sr-only">열기</span>
		</button>
	</div>
  );
};

export default Gnb;
