import React from 'react';
import Search from '../../../components/Search';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import './ExpenseManagement.css';

const ExpenseManagement = () => {
	return (
	  <div className="expense-management-container">
		<Search />
		<Table />
		<Pagination />
	  </div>
	);
  };
export default ExpenseManagement; 