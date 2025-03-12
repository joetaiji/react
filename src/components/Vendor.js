import React from 'react';
import Search from './Search.js';
import Table from './Table.js';
import Pagination from './Pagination.js';
import '../css/vendor.css';

const Vendor = () => {
  return (		
	<div className="vendor-container">
		<Search />
		<Table />			
        <Pagination />
	</div>
  );
};

export default Vendor;