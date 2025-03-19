import React from 'react';
import Search from '../../../components/ui/Search';
import Table from '../../../components/ui/Table';
import Pagination from '../../../components/ui/Pagination';
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