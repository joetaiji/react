import React from 'react';
import Search from '../../../components/ui/Search';
import Table from '../../../components/ui/Table';
import Pagination from '../../../components/ui/Pagination';
import './Employee.css';

const Employee = () => {
	return (
	  <div className="employee-container">
		<Search />
		<Table />
		<Pagination />
	  </div>
	);
  };

export default Employee; 