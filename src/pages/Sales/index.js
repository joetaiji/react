
import React from 'react';
import Search from '../../components/ui/Search';
import Filter from '../../components/ui/Filter';
import Table from '../../components/ui/Table';
import Pagination from '../../components/ui/Pagination';
import './Sales.css';

const Sales = () => {   

    return (
        <div className="sales-container">
            {/* 매출 목표 */}
            <div className="amount-target">
                <div className="target-amount">
                    <strong className="title"><i className="ri-bar-chart-fill" />매출 목표</strong>
                    <span className="amount">6,400,000,000<small>원</small></span>
                </div>
                <div className="target-slogan">
                    <strong>사업 견고화 및 내부역량 업-스케일링으로 기업가치를 높이자!</strong>
                    <button><i className="ri-settings-3-fill" />목표설정</button>
                </div>
            </div>

            {/* 매출 통계 */}
            <div className="amount-stat scroll">
                <div className="amount-stat-confirm-area">
                    <div className="group amount-stat-confirm colspan2">
                        <div className="row row1">
                            <strong className="title">확정매출<small className="desc">세금계산서 기준</small></strong>
                            <div className="amount-area">
                                <div className="graph-percent">
                                    <svg width="20" height="20" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="9.4" fill="white" stroke="#04B87F" strokeWidth="1" />
                                        <circle className="circle" r="5" cx="10" cy="10" fill="transparent" stroke="#04B87F"
                                            strokeWidth="10" strokeDasharray="" transform="rotate(-90) translate(-20)" />
                                    </svg>
                                    <span className="percent">15%</span>
                                </div>
                                <span className="amount">3,230,000,000<small>원</small></span>
                            </div>
                        </div>
                        <div className="row row2">
                            <button type="button" onClick={() => window.location.reload()} className="date">
                                <i className="ri-restart-line" />
                                <span>2025-03-17</span>
                            </button>
                            <div className="amount-area">
                                <span className="desc">IFRS 적용 매출</span>
                                <span className="amount">4,800,000,000<small>원</small></span>
                            </div>
                        </div>
                    </div>
                    <div className="group amount-stat-actual">
                        <strong className="title">실매출</strong>
                        <span className="amount-area">
                            <span className="amount">5,000,000,000<small>원</small></span>
                            <small className="desc">세금계산서 기준(VAT 별도)</small>
                        </span>
                    </div>
                    <div className="group amount-stat-outstand">
                        <strong className="title">미수</strong>
                        <span className="amount-area">
                            <span className="amount">3,000,000,000<small>원</small></span>
                            <small className="desc">계산서 발행</small>
                        </span>
                    </div>
                    <div className="group amount-stat-recent colspan2">
                        <strong className="title">최근 매출 실적</strong>
                        <ul className="list-dot">
                            <li>
                                <strong className="dept">CX영업부</strong>
                                <span className="subject">전체 사업부 최근 매출 프로젝트명 표출</span>
                                <span className="user">
                                    <span className="user-icon">홍</span>홍길동
                                </span>
                                <span className="amount">299,999,999<small>원</small></span>
                            </li>
                            <li>
                                <strong className="dept">CX영업부</strong>
                                <span className="subject">전체 사업부 최근 매출 프로젝트명 표출</span>
                                <span className="user">
                                    <span className="user-icon">길</span>길기전
                                </span>
                                <span className="amount">299,999,999<small>원</small></span>
                            </li>
                            <li>
                                <strong className="dept">CX영업부</strong>
                                <span className="subject">전체 사업부 최근 매출 프로젝트명 표출</span>
                                <span className="user">
                                    <span className="user-icon">동</span>동치미
                                </span>
                                <span className="amount">299,999,999<small>원</small></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="amount-stat-expect-area">
                    <div className="group colspan2 amount-stat-expect-cal">
                        <button className="prev-month"><i className="ri-arrow-left-s-line" /></button>
                        <strong className="ic-cal">2024 년 9월</strong>
                        <button className="next-month"><i className="ri-arrow-right-s-line" /></button>
                    </div>
                    <div className="group amount-stat-expect-sum">
                        <strong className="title">예상 매출 합계</strong>
                        <span className="amount-area">
                            <span className="compare-month">
                                <span className="label">전월대비 </span>
                                <span className="value down">50.0%</span>
                            </span>
                            <span className="amount">2,416,000,000<small>원</small></span>
                        </span>
                    </div>
                    <div className="group amount-stat-expect-dept">
                        <div className="dept-expect-sales active">
                            <strong className="title">부서별 예상 매출</strong>
                            <span className="amount-area">
                                <select className="form-control">
                                    <option value="">EX</option>
                                    <option value="">MX</option>
                                    <option value="">CX</option>
                                    <option value="">DX</option>
                                    <option value="">AX</option>
                                    <option value="">PX</option>
                                    <option value="">지최일만</option>
                                    <option value="">아누타</option>
                                </select>
                                <span className="amount">416,000,000<small>원</small></span>
                            </span>
                        </div>
                        <div className="project-expect-sales">
                            <strong className="title">프로젝트별 매출</strong>
                            <span className="amount-area">
                                <select className="form-control">
                                    <option value="">구축</option>
                                    <option value="">유지보수</option>
                                    <option value="">솔루션</option>
                                    <option value="">아누타</option>
                                </select>
                                <span className="amount">6,100,000<small>원</small></span>
                            </span>
                        </div>
                    </div>
                    <div className="group amount-stat-recent colspan2">
                        <strong className="title">이 달의 예정 매출</strong>
                        <ul className="list-dot">
                            <li>
                                <strong className="dept">CX영업부</strong>
                                <span className="subject">전체 사업부 최근 매출 프로젝트명 표출</span>
                                <span className="user">
                                    <span className="user-icon">홍</span>홍길동
                                </span>
                                <span className="amount">299,999,999<small>원</small></span>
                            </li>
                            <li>
                                <strong className="dept">CX영업부</strong>
                                <span className="subject">전체 사업부 최근 매출 프로젝트명 표출</span>
                                <span className="user">
                                    <span className="user-icon">길</span>길기전
                                </span>
                                <span className="amount">299,999,999<small>원</small></span>
                            </li>
                            <li>
                                <strong className="dept">CX영업부</strong>
                                <span className="subject">전체 사업부 최근 매출 프로젝트명 표출</span>
                                <span className="user">
                                    <span className="user-icon">동</span>동치미
                                </span>
                                <span className="amount">299,999,999<small>원</small></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 매출 통계 상세 */}
            <div className="amount-stat-detail">
                <Search />
                <Filter />
                <div className="graph-area graph-type1">
                    <div id="salesChart" className="chart-div" />
                </div>

                <Table />
				<Pagination />
            </div>
        </div>
    );
};

export default Sales; 