import React from 'react';
import '../css/button.css';

export default function Button() {
	function print() {
		window.print();
	}
	return (
		<button className="print-btn btn" onClick={print}>
			<i className="ri-printer-line"></i>
			<span className="sr-only">프린트</span>
		</button>
	);
}
