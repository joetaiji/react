import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// Suspense는 컴포넌트가 로딩될 때까지 대기 상태를 표시할 수 있게 해주는 React 기능입니다.
// lazy와 함께 사용하여 코드 분할(code splitting)을 구현합니다.
import { lazy, Suspense } from 'react';

// Core components
import Footer from './components/layout/Footer';
import Gnb from './components/layout/Gnb';
import Mdi from './components/layout/Mdi';
import PageTitleArea from './components/layout/PageTitleArea';
import Popup from './components/ui/Popup';

// Lazy loaded components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Project = lazy(() => import('./pages/Project'));
const Sales = lazy(() => import('./pages/Sales'));
const Expense = lazy(() => import('./pages/Expense'));
const Income = lazy(() => import('./pages/Income'));
const Vendor = lazy(() => import('./pages/Vendor'));
const Setting = lazy(() => import('./pages/Setting'));

// Lazy loaded sales components
const SalesFlow = lazy(() => import('./pages/Sales/SalesFlow'));
const SalesPerformance = lazy(() => import('./pages/Sales/SalesPerformance'));

// Lazy loaded expense components  
const ExpenseOutsourcing = lazy(() => import('./pages/Expense/ExpenseOutsourcing'));
const ExpenseManagement = lazy(() => import('./pages/Expense/ExpenseManagement'));

// Lazy loaded setting components
const Employee = lazy(() => import('./pages/Setting/Employee')); 
const Job = lazy(() => import('./pages/Setting/Job'));
const Goals = lazy(() => import('./pages/Setting/Goals'));
const InternalRate = lazy(() => import('./pages/Setting/InternalRate'));
const SwRate = lazy(() => import('./pages/Setting/SwRate'));

// Import styles
import './assets/styles/App.css';

// AppContent component that uses Router hooks
const AppContent = () => {
	// 초기 MDI 아이템으로 대시보드 설정
	const initialDashboard = {
		id: Date.now(),
		path: '/dashboard',
		title: '대시보드',
		icon: 'ri-home-3-fill'
	};

	const [mdiItems, setMdiItems] = useState([initialDashboard]);
	const [activeItem, setActiveItem] = useState('/dashboard');
	const navigate = useNavigate();

	const handleMdiAdd = (newItem) => {
		setMdiItems(prev => [...prev, newItem]);
		setActiveItem(newItem.path);
		navigate(newItem.path);
	};

	const handleMdiClick = (item) => {
		setActiveItem(item.path);
		navigate(item.path);
	};

	const handleMdiClose = (itemToClose) => {
		setMdiItems(prev => {
			const newItems = prev.filter(item => item.id !== itemToClose.id);
			// 대시보드는 항상 최소 하나 유지
			if (newItems.length === 0) {
				return [initialDashboard];
			}
			return newItems;
		});

		if (activeItem === itemToClose.path) {
			const remainingItems = mdiItems.filter(item => item.id !== itemToClose.id);
			if (remainingItems.length > 0) {
				const lastItem = remainingItems[remainingItems.length - 1];
				setActiveItem(lastItem.path);
				navigate(lastItem.path);
			} else {
				setActiveItem('/dashboard');
				navigate('/dashboard');
			}
		}
	};

	return (
		<div id="wrap">
			<main id="container">
				<Gnb 
					mdiItems={mdiItems}
					activeItem={activeItem}
					onMdiAdd={handleMdiAdd}
					onMdiClick={handleMdiClick}
					onMdiClose={handleMdiClose}
				/>
				<div id="contents" className="contents">					
					<Mdi 
						items={mdiItems}
						activeItem={activeItem}
						onItemClick={handleMdiClick}
						onItemClose={handleMdiClose}
					/>
					<div className="page-contents">
						<PageTitleArea />
						<Suspense fallback={<div>Loading...</div>}>
							<Routes>
								{/* Main routes */}
								<Route path="/" element={<Navigate to="/dashboard" replace />} />
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/project" element={<Project />} />					
								
								{/* Sales routes */}
								<Route path="/sales" element={<Sales />} />
								<Route path="/sales/flow" element={<SalesFlow />} />
								<Route path="/sales/performance" element={<SalesPerformance />} />
								
								{/* Expense routes */}
								<Route path="/expense" element={<Expense />} />
								<Route path="/expense/outsourcing" element={<ExpenseOutsourcing />} />
								<Route path="/expense/management" element={<ExpenseManagement />} />
								
								{/* Income route */}
								<Route path="/income" element={<Income />} />
								
								{/* Vendor route */}
								<Route path="/vendor" element={<Vendor />} />
								
								{/* Setting routes */}
								<Route path="/setting" element={<Setting />} />
								
								<Route path="/setting/employee" element={<Employee />} />
								<Route path="/setting/job" element={<Job />} />
								<Route path="/setting/goals" element={<Goals />} />
								<Route path="/setting/internal-rate" element={<InternalRate />} />
								<Route path="/setting/sw-rate" element={<SwRate />} />
							</Routes>
						</Suspense>

						<Footer />
					</div>
				</div>	
			</main>
		</div>
	);
};

// Main App component that provides Router context
const App = () => {
	return (
		<Router>
			<AppContent />
		</Router>
	);
};

export default App;