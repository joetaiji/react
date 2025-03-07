import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './css/output.css'; // Ensure this path is correct and the file exists

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);