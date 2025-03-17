import React from 'react';
import Search from '../../../components/Search';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import './SalesFlow.css';

const SalesFlow = () => {
	return (
	  <div className="sales-flow-container">
		<Search />
		<Table />
		<Pagination />
	  </div>
	);
};

export default SalesFlow; 