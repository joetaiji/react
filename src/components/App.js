import React from 'react';
import PageTitle from './PageTitle.js';
import Button from './Button.js';
import Search from './Search.js';
import Filter from './Filter.js';
import Table from './Table.js';
import Pagination from './Pagination.js';

export default function App() {	
  return (
	<div className="page-contents">
		<PageTitle />
	  	<Button />
	  	<Search />
	  	<Filter />
	  	<Table />
	  	<Pagination />
	</div>
  );
}