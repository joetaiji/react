import React from 'react';
import Search from '../../../components/ui/Search';
import Table from '../../../components/ui/Table';
import Pagination from '../../../components/ui/Pagination';
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