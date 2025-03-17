import React from 'react';
import { Outlet } from 'react-router-dom';

const Sales = () => {
    return (
        <div className="sales-container">
            <Outlet />
        </div>
    );
};

export default Sales; 