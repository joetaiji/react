import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/layout/logo.svg';

import './Gnb.css';

const Gnb = () => {
	const [mdiItems, setMdiItems] = useState([]);
	const [activeItem, setActiveItem] = useState(null);
	const [isNavOpen, setIsNavOpen] = useState(true);
	const location = useLocation();

	// 현재 경로에 따라 메뉴 활성화 처리
	useEffect(() => {
		const currentPath = location.pathname;
		setActiveItem(currentPath);
	}, [location]);

	const handleNavClick = (e, item) => {
		const isDepth3 = e.target.closest('.is-depth3');
		
		// MDI 아이템 추가
		if (!mdiItems.find(mdi => mdi.path === item.path)) {
			const newMdiItem = {
				...item,
				isDepth3: isDepth3 ? {
					parent: isDepth3.querySelector('> a').textContent
				} : null
			};
			setMdiItems(prev => [...prev, newMdiItem]);
		}
		
		setActiveItem(item.path);
	};

	const handleMdiClick = (clickedItem) => {
		setActiveItem(clickedItem.path);
	};

	const handleMdiClose = (itemToRemove) => {
		setMdiItems(prev => {
			const newItems = prev.filter(item => item.path !== itemToRemove.path);
			if (newItems.length > 0) {
				setActiveItem(newItems[newItems.length - 1].path);
			}
			return newItems;
		});
	};

	const handleNavToggle = () => {
		setIsNavOpen(prev => !prev);
	};

	return (
		<div id="sideNav" className={`left-menu sub01 ${isNavOpen ? '' : 'active'}`}>
			<div className="snb-head">
				<h1 className="logo"><img src={logo} alt="planI" /></h1>
				<div className="member-area">
					<div className="member">
						<div className="info">
							<span className="photo"><img src="/images/profiles/photo_1.png" alt="" /></span>
							{/* <span className="photo"><img src={`/images/profiles/photo_${userId}.png`} alt="" /></span> */}
							<strong className="name">김소영<span className="role">PM</span></strong>
							<span className="info-dept">
								<span className="dept">디지털전환사업부</span>
								<span className="team">사업2팀</span>
							</span>
						</div>
						<div className="btn-area">
							<NavLink 
								to="/mypage" 
								className={`btn sm mypage ${activeItem === '/mypage' ? 'active' : ''}`}
								onClick={(e) => handleNavClick(e, { path: '/mypage', title: '마이페이지' })}
							>
								마이페이지
							</NavLink>
							<button className="btn sm logout">로그아웃</button>
						</div>
					</div>
				</div>
			</div>
			<nav className="snb-list">
				<ul>
					<li className={activeItem === '/dashboard' ? 'active' : ''}>
						<NavLink 
							to="/dashboard" 
							className={({ isActive }) => isActive ? 'selected' : ''}
							onClick={(e) => handleNavClick(e, { path: '/dashboard', title: '대시보드', icon: 'ri-home-3-fill' })}
						>
							<i className="ri-home-3-fill"></i><span>대시보드</span>
						</NavLink>
					</li>
					<li className={activeItem === '/project' ? 'active' : ''}>
						<NavLink 
							to="/project" 
							className={({ isActive }) => isActive ? 'selected' : ''}
							onClick={(e) => handleNavClick(e, { path: '/project', title: '프로젝트', icon: 'ri-stack-fill' })}
						>
							<i className="ri-stack-fill"></i><span>프로젝트</span>
						</NavLink>
					</li>
					<li className={`is-depth3 ${activeItem?.startsWith('/sales') ? 'active' : ''}`}>
						<NavLink 
							to="/sales" 
							className={({ isActive }) => isActive ? 'selected' : ''}
							onClick={(e) => handleNavClick(e, { path: '/sales', title: '매출 관리', icon: 'ri-bar-chart-fill' })}
						>
							<i className="ri-bar-chart-fill"></i><span>매출 관리</span>
						</NavLink>
						<ul>
							<li className={activeItem === '/sales' ? 'active' : ''}>
								<NavLink 
									to="/sales" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/sales', title: '매출 통계' })}
								>
									매출 통계
								</NavLink>
							</li>
							<li className={activeItem === '/sales/flow' ? 'active' : ''}>
								<NavLink 
									to="/sales/flow" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/sales/flow', title: '현금 흐름' })}
								>
									현금 흐름
								</NavLink>
							</li>
							<li className={activeItem === '/sales/performance' ? 'active' : ''}>
								<NavLink 
									to="/sales/performance" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/sales/performance', title: '전체 실적(계약)' })}
								>
									전체 실적(계약)
								</NavLink>
							</li>
						</ul>
					</li>
					<li className={`is-depth3 ${activeItem?.startsWith('/expense') ? 'active' : ''}`}>
						<NavLink to="/expense" data-page="menu4" className={({ isActive }) => isActive ? 'selected' : ''}>
							<i className="ri-coin-fill"></i><span>지출 관리</span>
						</NavLink>
						<ul>
							<li className={activeItem === '/expense' ? 'active' : ''}>
								<NavLink to="/expense" data-page="menu4" className={({ isActive }) => isActive ? 'selected' : ''}>지출 통계</NavLink>
							</li>
							<li className={activeItem === '/expense/outsourcing' ? 'active' : ''}>
								<NavLink to="/expense/outsourcing" data-page="menu4-2" className={({ isActive }) => isActive ? 'selected' : ''}>직접비(외주비)</NavLink>
							</li>
							<li className={activeItem === '/expense/management' ? 'active' : ''}><NavLink to="/expense/management" data-page="menu4-3" className={({ isActive }) => isActive ? 'selected' : ''}>비용 관리</NavLink></li>
						</ul>
					</li>
					<li className={activeItem === '/income' ? 'active' : ''}>
						<NavLink to="/income" data-page="menu5" className={({ isActive }) => isActive ? 'selected' : ''}>
							<i className="ri-ball-pen-fill"></i><span>실적 관리(손익계산)</span>
						</NavLink>
					</li>
					<li className={activeItem === '/vendor' ? 'active' : ''}>
						<NavLink to="/vendor" data-page="menu6" className={({ isActive }) => isActive ? 'selected' : ''}>
							<i className="ri-service-fill"></i><span>거래처</span>
						</NavLink>
					</li>
					<li className={`is-depth3 ${activeItem?.startsWith('/setting') ? 'active' : ''}`}>
						<NavLink to="/setting" data-page="menu7" className={({ isActive }) => isActive ? 'selected' : ''}>
							<i className="ri-settings-2-fill"></i><span>환경설정</span>
						</NavLink>
						<ul>
							<li className={activeItem === '/setting' ? 'active' : ''}><NavLink to="/setting" data-page="menu7" className={({ isActive }) => isActive ? 'selected' : ''}>조직도</NavLink></li>
							<li className={activeItem === '/setting/employee' ? 'active' : ''}><NavLink to="/setting/employee" data-page="menu7-2" className={({ isActive }) => isActive ? 'selected' : ''}>직원정보</NavLink></li>
							<li className={activeItem === '/setting/job' ? 'active' : ''}><NavLink to="/setting/job" data-page="menu7-3" className={({ isActive }) => isActive ? 'selected' : ''}>직무정보</NavLink></li>
							<li className={activeItem === '/setting/goals' ? 'active' : ''}><NavLink to="/setting/goals" data-page="menu7-4" className={({ isActive }) => isActive ? 'selected' : ''}>목표 관리</NavLink></li>
							<li className={activeItem === '/setting/internal-rate' ? 'active' : ''}><NavLink to="/setting/internal-rate" data-page="menu7-5" className={({ isActive }) => isActive ? 'selected' : ''}>내부 노임단가</NavLink></li>
							<li className={activeItem === '/setting/sw-rate' ? 'active' : ''}><NavLink to="/setting/sw-rate" data-page="menu7-6" className={({ isActive }) => isActive ? 'selected' : ''}>SW노임단가</NavLink></li>
						</ul>
					</li>
				</ul>
			</nav>
			<div className="mdi-item-group">
				{mdiItems.map((item) => (
					<div 
						key={item.path}
						className={`mdi-item ${activeItem === item.path ? 'active' : ''}`}
						onClick={() => handleMdiClick(item)}
					>
						{item.isDepth3 && <small>{item.isDepth3.parent} &gt; </small>}
						{item.icon && <i className={item.icon}></i>}
						<span>{item.title}</span>
						<i className="ri-close-line" onClick={(e) => {
							e.stopPropagation();
							handleMdiClose(item);
						}}></i>
					</div>
				))}
			</div>
			<button 
				className="snb-close" 
				aria-expanded={!isNavOpen}
				onClick={handleNavToggle}
			>
				<i className="ri-arrow-left-s-line"></i>
				<span className="sr-only">{isNavOpen ? '닫기' : '열기'}</span>
			</button>
		</div>
	);
};

export default Gnb;
