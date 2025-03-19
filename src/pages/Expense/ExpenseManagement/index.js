import React from 'react';
import Search from '../../../components/ui/Search';
import Table from '../../../components/ui/Table';
import Pagination from '../../../components/ui/Pagination';
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