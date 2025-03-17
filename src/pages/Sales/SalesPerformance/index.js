import React from 'react';
import Search from '../../../components/Search';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import './SalesPerformance.css';

const SalesPerformance = () => {
	return (
	  <div className="sales-performance-container">
		<Search />
		<Table />
		<Pagination />
	  </div>
	);
  };

export default SalesPerformance; 