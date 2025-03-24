import React from 'react';

export default function Util() {
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
