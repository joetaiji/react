import React from 'react';
import { createRoot } from 'react-dom/client';
import Gnb from './components/Gnb';
import App from './components/App';
import './css/output.css'; // Ensure this path is correct and the file exists

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<div id="wrap">
		<main id="container">
			<Gnb />
			<div id="contents" className="contents">
				<App />
			</div>
		</main>
	</div>
  </React.StrictMode>
);