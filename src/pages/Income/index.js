import React from 'react';
import Search from '../../components/Search';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import './Income.css';

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