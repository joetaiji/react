import React from 'react';
import { Outlet } from 'react-router-dom';
import './Setting.css';

const Setting = () => {
    return (
        <div className="setting-container">
            <Outlet />
			조직도
        </div>
    );
};

export default Setting; 