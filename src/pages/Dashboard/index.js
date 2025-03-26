import React from 'react';
import './Dashboard.css';
import Tooltip from '../../components/ui/Tooltip';
import DbSalesChart from '../../components/charts/DbSalesChart';
import DbMemberChart from '../../components/charts/DbMemberChart';
import DbCustomerChart from '../../components/charts/DbCustomerChart';
import Calendar from '../../components/calendar/Calendar';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
           <div className="announce-list">
				<i className="ri-volume-down-fill"></i><b>공지사항</b><a href="#">12월 정보보안의 날 운영 안내 드립니다.</a>
			</div>

			<div className="box dept-target">
				<button className="btn-dept-select" data-layer="dept" contentEditable>EX 사업부</button>
				<div className="target-slogan">
					<strong>고객이 줄서서 기다리는 소문난 디지털 서비스 맛집</strong>
				</div>
			</div>
			<div className="dashboard-colgroup">
				<div className="col-main">
					<div className="dashboard-main">
						<div className="box">
							<div className="sales-stats">
								<div className="sales">
									<div className="sales-total">
										<h3 className="heading-m">매출</h3>
										<span className="amount"><b>4,800,000,000</b> <small>원</small></span>
									</div>
									<div className="sub-item">
										<strong className="title">연 목표</strong>
										<span className="amount"><b>4,800,000,000</b> <small>원</small></span>
									</div>
								</div>
								<div className="income">
									<div className="income-total">
										<h3 className="heading-m">이익</h3>
										<span className="amount"><b>55.55</b> <small>%</small></span>
									</div>
									<div className="sub-item">
										<strong className="title">순이익 금액</strong>
										<span className="amount"><b>299,999,000</b> <small>원</small></span>
									</div>
								</div>
							</div>
							{/* //sales-stats */}
							<div className="sales-graph graph-area">
								<DbSalesChart />
							</div>
							{/* //sales-graph */}
						</div>
						{/* //매출 이익 박스 */}

						<div className="member-stats box">
							<h3 className="heading-m">구성원 <small>65 명</small></h3>
							<span className="prev-day">전일대비 <b className="point">+ 3명</b></span>

							<div className="graph-area">
								<DbMemberChart />
							</div>
						</div>
						{/* //매출 이익 박스 */}
					</div>
					<div className="box dashboard-calendar">
						<h3 className="heading-m">캘린더</h3>
						<Calendar />
					</div>
				</div>
				{/* //col-main */}

				<div className="col-sub">
					<div className="project-ranking box">
						<h3 className="heading-m">프로젝트 랭킹</h3>
						<div className="tabs">
							<ul className="depth4">
								<li className="tab-nav1 active">
									<button>개인</button>
									<div className="tab-cont">	
										<Tooltip />	
										<ul className="list">
											<li>
												<a href="" className="btn-popup-view" data-id="mem-date-count" data-target="mypage">
													<div className="project-orderer">
														<small className="orderer">중앙사회서비스원</small>
													</div>
													<strong className="subject">중앙사회서비스원 대표 홈페이지 클라우드 전환 및 개선 중앙사회서비스원 대표 홈페이지
														클라우드 전환 및 개선</strong>
													<span className="project-date">
														<b>13.5</b><small>일</small>
													</span>
													<span className="term">2024.12.23 ~ 2025.01.16</span>
												</a>
											</li>
											<li>
												<a href="" className="btn-popup-view" data-id="mem-date-count" data-target="mypage">
													<div className="project-orderer">
														<small className="orderer">중앙사회서비스원</small>
													</div>
													<strong className="subject">화학물질안전관리특성화대학원 홈페이지 구축</strong>
													<span className="project-date">
														<b>8.25</b><small>일</small>
													</span>
													<span className="term">2024.12.23 ~ 2025.01.16</span>
												</a>
											</li>
											<li>
												<a href="" className="btn-popup-view" data-id="mem-date-count" data-target="mypage">
													<div className="project-orderer">
														<small className="orderer">중앙사회서비스원</small>
													</div>
													<strong className="subject">청년정책 온라인 종합 플랫폼 구축</strong>
													<span className="project-date">
														<b>10</b><small>일</small>
													</span>
													<span className="term">2024.12.23 ~ 2025.01.16</span>
												</a>
											</li>
											<li>
												<a href="" className="btn-popup-view" data-id="mem-date-count" data-target="mypage">
													<div className="project-orderer">
														<small className="orderer">한국에너지기술연구원</small>
													</div>
													<strong className="subject">한국에너지기술연구원 대표홈페이지 메인디자인 개편</strong>
													<span className="project-date">
														<b>16.25</b><small>일</small>
													</span>
													<span className="term">2024.12.23 ~ 2025.01.16</span>
												</a>
											</li>
										</ul>
										<a href="" className="more">더보기 <i className="ri-arrow-right-s-line"></i></a>
									</div>
								</li>
								<li className="tab-nav2">
									<button>부서</button>
									<div className="tab-cont">
										<ul className="list">
											<li>
												<a href="" className="btn-popup-view" data-id="mem-date-count">
													<div className="project-orderer">
														<small className="orderer">중앙사회서비스원</small>
														<span className="date end">마감 D-30</span>
													</div>
													<strong className="subject">중앙사회서비스원 대표 홈페이지 클라우드 전환 및 개선 중앙사회서비스원 대표 홈페이지
														클라우드 전환 및 개선</strong>
													<span className="term">2024.12.23 ~ 2025.01.16</span>
												</a>
											</li>
											<li>
												<a href="" className="btn-popup-view" data-id="mem-date-count">
													<div className="project-orderer">
														<small className="orderer">중앙사회서비스원</small>
														<span className="date new">NEW</span>
													</div>
													<strong className="subject">화학물질안전관리특성화대학원 홈페이지 구축</strong>
													<span className="term">2024.12.23 ~ 2025.01.16</span>
												</a>
											</li>
											<li>
												<a href="" className="btn-popup-view" data-id="mem-date-count">
													<div className="project-orderer">
														<small className="orderer">중앙사회서비스원</small>
													</div>
													<strong className="subject">청년정책 온라인 종합 플랫폼 구축</strong>
													<span className="term">2024.12.23 ~ 2025.01.16</span>
												</a>
											</li>
										</ul>
										<a href="" className="more">더보기 <i className="ri-arrow-right-s-line"></i></a>
									</div>
								</li>
							</ul>
						</div>
						{/* //tabs */}
					</div>
					{/* //프로젝트 랭킹 */}

					<div className="customer-percent box">
						<h3 className="heading-m">우리 부서 고객 점유율</h3>
						<div className="graph-area">
							<DbCustomerChart />
						</div>
					</div>
					{/* //우리 부서 고객 점유율 */}

					<div className="connect-link box">
						<h3 className="heading-m">Connect</h3>
						<div className="cont">
							<a href="" className="link-item"><img src="/images/contents/connect_site1.png" alt="" /></a>
							<a href="" className="link-item"><img src="/images/contents/connect_site2.png" alt="" /></a>
							<a href="" className="link-item"><img src="/images/contents/connect_site3.png" alt="" /></a>
							<a href="" className="link-item"><img src="/images/contents/connect_site4.png" alt="" /></a>
							<a href="" className="link-item"><img src="/images/contents/connect_site5.png" alt="" /></a>
						</div>
					</div>
					{/* //우리 부서 고객 점유율 */}
				</div>
				{/* //col-sub */}
			</div>
        </div>
    );
};

export default Dashboard; 