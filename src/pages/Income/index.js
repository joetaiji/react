import React from 'react';
import Search from '../../components/ui/Search';
import Table from '../../components/ui/Table';
import Pagination from '../../components/ui/Pagination';
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