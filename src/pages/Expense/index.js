
import React from 'react';
import { Outlet } from 'react-router-dom';

const Expense = () => {
    return (
        <div className="Expense-container">
            <Outlet />
        </div>
    );
};

export default Expense; 