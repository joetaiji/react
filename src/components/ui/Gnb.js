import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/layout/logo.svg';
import profileImage from '../../assets/images/profiles/photo_1.png';

import './Gnb.css';

const menuItems = [
	{
		path: '/dashboard',
		title: '대시보드',
		icon: 'ri-home-3-fill'
	},
	{
		path: '/project',
		title: '프로젝트',
		icon: 'ri-stack-fill'
	},
	{
		path: '/sales',
		title: '매출 관리',
		icon: 'ri-bar-chart-fill',
		children: [
			{ path: '/sales', title: '매출 통계' },
			{ path: '/sales/flow', title: '현금 흐름' },
			{ path: '/sales/performance', title: '전체 실적(계약)' }
		]
	},
	{
		path: '/expense',
		title: '지출 관리',
		icon: 'ri-coin-fill',
		children: [
			{ path: '/expense', title: '지출 통계' },
			{ path: '/expense/outsourcing', title: '직접비(외주비)' },
			{ path: '/expense/management', title: '비용 관리' }
		]
	},
	{
		path: '/income',
		title: '실적 관리(손익계산)',
		icon: 'ri-ball-pen-fill'
	},
	{
		path: '/vendor',
		title: '거래처',
		icon: 'ri-service-fill'
	},
	{
		path: '/setting',
		title: '환경설정',
		icon: 'ri-settings-2-fill',
		children: [
			{ path: '/setting', title: '조직도' },
			{ path: '/setting/employee', title: '직원정보' },
			{ path: '/setting/job', title: '직무정보' },
			{ path: '/setting/goals', title: '목표 관리' },
			{ path: '/setting/internal-rate', title: '내부 노임단가' },
			{ path: '/setting/sw-rate', title: 'SW노임단가' }
		]
	}
];

const Gnb = ({ mdiItems, activeItem, onMdiAdd, onMdiClick, onMdiClose }) => {
	const [isNavOpen, setIsNavOpen] = useState(true);
	const location = useLocation();

	const findMenuItem = (path) => {
		// 하위 메뉴에서 먼저 찾기
		for (const item of menuItems) {
			if (item.children) {
				const childItem = item.children.find(child => child.path === path);
				if (childItem) {
					return {
						parent: item,
						child: childItem
					};
				}
				// 상위 메뉴와 경로가 같을 경우 첫 번째 하위 메뉴를 반환
				if (item.path === path) {
					return {
						parent: item,
						child: item.children[0] // 첫 번째 하위 메뉴
					};
				}
			}
		}
		
		// 하위 메뉴에서 찾지 못한 경우 최상위 메뉴에서 찾기
		const parentItem = menuItems.find(item => item.path === path);
		return { parent: parentItem };
	};

	const handleNavClick = (e, item) => {
		e.preventDefault();
		
		// 현재 클릭된 메뉴의 정보 찾기
		const menuInfo = findMenuItem(item.path);
		
		// MDI 아이템이 없을 때만 추가
		if (!mdiItems.some(mdi => mdi.path === item.path)) {
			const newMdiItem = {
				id: Date.now(),
				...item,
				title: menuInfo.child?.title || item.title, // 하위 메뉴의 title이 있으면 사용
				isDepth3: menuInfo.parent?.children ? {
					parent: menuInfo.parent.title
				} : null
			};
			onMdiAdd(newMdiItem);
		} else {
			// 이미 존재하는 탭이면 해당 탭을 활성화
			const existingItem = mdiItems.find(mdi => mdi.path === item.path);
			if (existingItem) {
				onMdiClick(existingItem);
			}
		}
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
							<span className="photo"><img src={profileImage} alt="" /></span>
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
						<NavLink 
							to="/expense" 
							className={({ isActive }) => isActive ? 'selected' : ''}
							onClick={(e) => handleNavClick(e, { path: '/expense', title: '지출 관리', icon: 'ri-coin-fill' })}
						>
							<i className="ri-coin-fill"></i><span>지출 관리</span>
						</NavLink>
						<ul>
							<li className={activeItem === '/expense' ? 'active' : ''}>
								<NavLink 
									to="/expense" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/expense', title: '지출 통계' })}
								>
									지출 통계
								</NavLink>
							</li>
							<li className={activeItem === '/expense/outsourcing' ? 'active' : ''}>
								<NavLink 
									to="/expense/outsourcing" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/expense/outsourcing', title: '직접비(외주비)' })}
								>
									직접비(외주비)
								</NavLink>
							</li>
							<li className={activeItem === '/expense/management' ? 'active' : ''}>
								<NavLink 
									to="/expense/management" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/expense/management', title: '비용 관리' })}
								>
									비용 관리
								</NavLink>
							</li>
						</ul>
					</li>
					<li className={activeItem === '/income' ? 'active' : ''}>
						<NavLink 
							to="/income" 
							className={({ isActive }) => isActive ? 'selected' : ''}
							onClick={(e) => handleNavClick(e, { path: '/income', title: '실적 관리(손익계산)', icon: 'ri-ball-pen-fill' })}
						>
							<i className="ri-ball-pen-fill"></i><span>실적 관리(손익계산)</span>
						</NavLink>
					</li>
					<li className={activeItem === '/vendor' ? 'active' : ''}>
						<NavLink 
							to="/vendor" 
							className={({ isActive }) => isActive ? 'selected' : ''}
							onClick={(e) => handleNavClick(e, { path: '/vendor', title: '거래처', icon: 'ri-service-fill' })}
						>
							<i className="ri-service-fill"></i><span>거래처</span>
						</NavLink>
					</li>
					<li className={`is-depth3 ${activeItem?.startsWith('/setting') ? 'active' : ''}`}>
						<NavLink 
							to="/setting" 
							className={({ isActive }) => isActive ? 'selected' : ''}
							onClick={(e) => handleNavClick(e, { path: '/setting', title: '환경설정', icon: 'ri-settings-2-fill' })}
						>
							<i className="ri-settings-2-fill"></i><span>환경설정</span>
						</NavLink>
						<ul>
							<li className={activeItem === '/setting' ? 'active' : ''}>
								<NavLink 
									to="/setting" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/setting', title: '조직도' })}
								>
									조직도
								</NavLink>
							</li>
							<li className={activeItem === '/setting/employee' ? 'active' : ''}>
								<NavLink 
									to="/setting/employee" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/setting/employee', title: '직원정보' })}
								>
									직원정보
								</NavLink>
							</li>
							<li className={activeItem === '/setting/job' ? 'active' : ''}>
								<NavLink 
									to="/setting/job" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/setting/job', title: '직무정보' })}
								>
									직무정보
								</NavLink>
							</li>
							<li className={activeItem === '/setting/goals' ? 'active' : ''}>
								<NavLink 
									to="/setting/goals" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/setting/goals', title: '목표 관리' })}
								>
									목표 관리
								</NavLink>
							</li>
							<li className={activeItem === '/setting/internal-rate' ? 'active' : ''}>
								<NavLink 
									to="/setting/internal-rate" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/setting/internal-rate', title: '내부 노임단가' })}
								>
									내부 노임단가
								</NavLink>
							</li>
							<li className={activeItem === '/setting/sw-rate' ? 'active' : ''}>
								<NavLink 
									to="/setting/sw-rate" 
									className={({ isActive }) => isActive ? 'selected' : ''}
									onClick={(e) => handleNavClick(e, { path: '/setting/sw-rate', title: 'SW노임단가' })}
								>
									SW노임단가
								</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<div className="mdi-item-group">
				{mdiItems.map((item) => (
					<div 
						key={item.id}
						className={`mdi-item ${activeItem === item.path ? 'active' : ''}`}
						onClick={() => onMdiClick(item)}
					>
						{item.isDepth3 && <small>{item.isDepth3.parent} &gt; </small>}
						{item.icon && <i className={item.icon}></i>}
						<span>{item.title}</span>
						<i 
							className="ri-close-line" 
							onClick={(e) => {
								e.stopPropagation();
								onMdiClose(item);
							}}
						></i>
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
