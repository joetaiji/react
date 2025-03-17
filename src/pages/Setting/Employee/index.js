import React from 'react';
import Search from '../../../components/Search';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
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