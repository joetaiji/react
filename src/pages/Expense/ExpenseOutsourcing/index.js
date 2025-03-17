import React from 'react';
import Search from '../../../components/Search';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import './ExpenseOutsourcing.css';

const ExpenseOutsourcing = () => {
	return (
	  <div className="expense-outsourcing-container">
		<Search />
		<Table />
		<Pagination />
	  </div>
	);
  };
export default ExpenseOutsourcing; 