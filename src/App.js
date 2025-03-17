import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Suspense는 컴포넌트가 로딩될 때까지 대기 상태를 표시할 수 있게 해주는 React 기능입니다.
// lazy와 함께 사용하여 코드 분할(code splitting)을 구현합니다.
import { lazy, Suspense } from 'react';

// Core components
import Gnb from './components/ui/Gnb.js';
import Mdi from './components/ui/Mdi.js';
import PageTitle from './components/PageTitle.js';
import Button from './components/Button.js';
import Footer from './components/ui/Footer.js';
import Popup from './components/Popup.js';

// Lazy loaded components
const Dashboard = lazy(() => import('./pages/Dashboard/index.js'));
const Project = lazy(() => import('./pages/Project/index.js'));
const Sales = lazy(() => import('./pages/Sales/index.js'));
const Expense = lazy(() => import('./pages/Expense/index.js'));
const Income = lazy(() => import('./pages/Income/index.js'));
const Vendor = lazy(() => import('./pages/Vendor/index.js'));
const Setting = lazy(() => import('./pages/Setting/index.js'));

// Lazy loaded sales components
const SalesFlow = lazy(() => import('./pages/Sales/SalesFlow/index.js'));
const SalesPerformance = lazy(() => import('./pages/Sales/SalesPerformance/index.js'));

// Lazy loaded expense components  
const ExpenseOutsourcing = lazy(() => import('./pages/Expense/ExpenseOutsourcing/index.js'));
const ExpenseManagement = lazy(() => import('./pages/Expense/ExpenseManagement/index.js'));

// Lazy loaded setting components
const Organization = lazy(() => import('./pages/Setting/Organization/index.js'));
const Employee = lazy(() => import('./pages/Setting/Employee/index.js')); 
const Job = lazy(() => import('./pages/Setting/Job/index.js'));
const Goals = lazy(() => import('./pages/Setting/Goals/index.js'));
const InternalRate = lazy(() => import('./pages/Setting/InternalRate/index.js'));
const SwRate = lazy(() => import('./pages/Setting/SwRate/index.js'));

// Import styles
import './assets/styles/App.css';

const App = () => {
	return (
		<Router>
			<div id="wrap">
				<main id="container">
					<Gnb />
					<div id="contents" className="contents">
						<Mdi />
						<div className="page-contents">
							<PageTitle />
							<Button />

							<Routes>
								{/* Main routes */}
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
								<Route path="/setting/organization" element={<Organization />} />
								<Route path="/setting/employee" element={<Employee />} />
								<Route path="/setting/job" element={<Job />} />
								<Route path="/setting/goals" element={<Goals />} />
								<Route path="/setting/internal-rate" element={<InternalRate />} />
								<Route path="/setting/sw-rate" element={<SwRate />} />
							</Routes>

							<Footer />
							<Popup />
						</div>
					</div>	
				</main>
			</div>
		</Router>
	);
};

export default App;