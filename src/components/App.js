import React from 'react';
import PageTitle from './PageTitle.js';
import Button from './Button.js';
import Search from './Search.js';
import Filter from './Filter.js';

export default function App() {	
  return (
	<div className="page-contents">
		<PageTitle />
	  	<Button />
	  	<Search />
	  	<Filter />
	</div>
  );
}