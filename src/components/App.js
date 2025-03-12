import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTitle from './PageTitle.js';
import Button from './Button.js';
import Footer from './Footer.js';
import Popup from './Popup.js';
import Dashboard from './Dashboard.js';
import Project from './Project.js';
import Sales from './Sales.js';
import Expense from './Expense.js';
import Income from './Income.js';
import Vendor from './Vendor.js';
import Setting from './Setting.js';
import '../css/App.css';

const App = () => {
	return (
		<Router>
			<div className="page-contents">
				<PageTitle />
				<Button />

				<Routes>
					<Route path="/dashboard" element={
						<Dashboard />
					} />
					<Route path="/project" element={
						<Project />
					} />					
					<Route path="/sales" element={
						<Sales />
					} />
					<Route path="/expense" element={
						<Expense />
					} />
					<Route path="/income" element={
						<Income />
					} />
					<Route path="/vendor" element={
						<Vendor />
					} />
					<Route path="/setting" element={
						<Setting />
					} />
				</Routes>

				<Footer />
				<Popup />
			</div>
		</Router>
	);
};

export default App;