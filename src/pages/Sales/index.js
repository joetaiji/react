
import React from 'react';
import profileImage from '../../assets/images/profiles/photo_1.png';	
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
                <div className="sch-input">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="allKeyWord" 
                        placeholder="지출 키워드 입력" 
                        defaultValue=""
                        title="지출 키워드 입력"
                    />
                    <button type="submit" className="btn sch-btn">
                        <i className="ri-search-2-line" />
                        <span className="sr-only">검색</span>
                    </button>
                </div>

                

                <div className="graph-area graph-type1">
                    <div id="salesChart" className="chart-div" />
                </div>

                <div className="table sortable">
                    <table>
                        <colgroup>
                            <col className="w3" />
                            <col className="w8" />
                            <col />
                            <col className="w8" />
                            <col span="3" className="w12" />
                            <col className="w6" />
                        </colgroup>
                        <caption></caption>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">부서</th>
                                <th scope="col">프로젝트명</th>
                                <th scope="col">담당자</th>
                                <th scope="col">금액</th>
                                <th scope="col">계산서 발행일</th>
                                <th scope="col">입금일</th>
                                <th scope="col">상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="row-btn-control">
                                    <div className="user-group">
                                        <span className="user-icon">
                                            <img src={profileImage} alt="" />	
                                        </span>
                                        <span className="user-icon">김</span>
                                        <span className="user-icon">정</span>
                                        <span className="user-sum">+2명</span>
                                    </div>
                                    <span className="btn-draggable"><i className="ri-draggable"></i></span>
                                </td>
                                <td><span data-layer="dept" contenteditable>MX</span></td>
                                <td><span data-layer="project" contenteditable>2024년 연구개발특구진흥재단 홈페이지 기능 개선 및 유지보수 용역</span>
                                </td>
                                <td><span data-layer="manager" contenteditable><span className="user-icon">김</span> 김정서</span>
                                </td>
                                <td><span className="amount" contenteditable>51,840,000</span></td>
                                <td><span className="input-date ic-cal"><input type="text" className="form-control" defaultValue="2025-02-30" /></span></td>
                                <td><span className="input-date ic-cal"><input type="text" className="form-control" defaultValue="2025-12-31" /></span></td>
                                <td><span data-layer="status"><span className="state hold">미수</span></span></td>
                            </tr>
                            <tr>
                                <td className="row-btn-control">
                                    <div className="user-group">
                                        <span className="user-icon">조</span>
                                        <span className="user-icon">최</span>
                                        <span className="user-icon">류</span>
                                        <span className="user-sum">+10명</span>
                                    </div>
                                    <span className="btn-draggable"><i className="ri-draggable"></i></span>
                                </td>
                                <td><span data-layer="dept" contenteditable>EX</span></td>
                                <td><span data-layer="project" contenteditable>양성자가속기 장비이력관리시스템 고도화 및 유지보수 위탁용역</span></td>
                                <td><span data-layer="manager" contenteditable><span className="user-icon">이</span> 이상민</span>
                                </td>
                                <td><span className="amount" contenteditable>55,000,000</span></td>
                                <td><span className="input-date ic-cal"><input type="text" className="form-control" defaultValue="2024-08-30" /></span></td>
                                <td><span className="input-date ic-cal"><input type="text" className="form-control" defaultValue="2025-05-12" /></span></td>
                                <td><span data-layer="status"><span className="state ing">진행</span></span></td>
                            </tr>
                            <tr>
                                <td className="row-btn-control">
                                    <div className="user-group">
                                        <span className="user-icon">이</span>
                                        <span className="user-icon">
                                            <img src={profileImage} alt="" />
                                        </span>
                                        <span className="user-icon">최</span>
                                        <span className="user-sum">+6명</span>
                                    </div>
                                    <span className="btn-draggable"><i className="ri-draggable" /></span>
                                </td>
                                <td><span data-layer="dept" contenteditable>DX</span></td>
                                <td><span data-layer="project" contenteditable>클라우드컴퓨팅서비스 이용</span></td>
                                <td><span data-layer="manager" contenteditable><span className="user-icon">원</span> 원미정</span></td>
                                <td>
                                    <span className="amount" contenteditable>19,252,134</span>
                                    <div className="ifrs-item">
                                        <small>당해년도 IFRS</small><span>5,000,000</span>
                                    </div>
                                </td>
                                <td><span className="input-date ic-cal"><input type="text" className="form-control" defaultValue="2024-09-03" /></span></td>
                                <td><span className="input-date ic-cal"><input type="text" className="form-control" defaultValue="2024-09-13" /></span></td>
                                <td><span data-layer="status"><span className="state end">입금</span></span></td>
                            </tr>
                            <tr>
                                <td className="row-btn-control">
                                    <div className="user-group">
                                        <span className="user-icon">
											<img src={profileImage} alt="" />
                                        </span>
                                        <span className="user-icon">허</span>
                                        <span className="user-icon">조</span>
                                    </div>
                                    <span className="btn-draggable"><i className="ri-draggable"></i></span>
                                </td>
                                <td><span data-layer="dept" contenteditable>EX</span></td>
                                <td><span data-layer="project" contenteditable>(NIGT) 웹 기반 글로벌 R&amp;D 전략지도 정보시스템 구축</span></td>
                                <td>
                                    <span data-layer="manager" contenteditable>
                                        <span className="user-icon">
                                            <img src={profileImage} alt="" />
                                        </span> 김소영
                                    </span>
                                </td>
                                <td>
                                    <span className="amount" contenteditable>10,000,000</span>
                                    <div className="ifrs-item">
                                        <small>당해년도 IFRS</small><span>5,000,000</span>
                                    </div>
                                </td>
                                <td><span className="input-date ic-cal"><input type="text" className="form-control" defaultValue="2024-09-03" /></span></td>
                                <td><span className="input-date ic-cal"><input type="text" className="form-control" defaultValue="2025-03-02" /></span></td>
                                <td><span data-layer="status"><span className="state ing">진행</span></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sales; 