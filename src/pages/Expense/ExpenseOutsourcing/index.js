import React from 'react';
import Search from '../../../components/ui/Search';
import Table from '../../../components/ui/Table';
import Pagination from '../../../components/ui/Pagination';
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