import React from 'react';
import './Expense.css';

const Expense = () => {
    return (
        <div className="expense-container">
            <div className="expense-header">
                <h2>지출 관리</h2>
            </div>
            <div className="expense-summary">
                {/* Expense summary cards will go here */}
            </div>
            <div className="expense-grid">
                {/* Expense content will go here */}
            </div>
        </div>
    );
};

export default Expense; 