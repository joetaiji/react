import React from 'react';
import Gallery from './Gallery.js';

function Card({ children }) {
  return (
	<div className='card'>
	  {children}
	</div>
  );
}

export default function Profile() {	
  return (
	<Card>
	  <Gallery 
		person={{
			name: 'Katsuko Saruhashi',
			imageId: 'YfeOqp2',
		}} 
		size={100} 
	  />	  
	  <Gallery 
		person={{
			name: 'Gregorio Y. Zara',
			imageId: '7vQD0fP',
		}} 
		size={50} 
	  />	 
	  <Gallery 
		person={{
			name: 'Lin Lanying',
			imageId: '1bX5QH6',
		}} 
		size={50} 
	  />	 
	  	  
	</Card>
  );
}