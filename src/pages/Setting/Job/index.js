import React from 'react';
import Search from '../../../components/Search';
import Table from '../../../components/Table';
import './Job.css';

const Job = () => {
  return (
    <div className="job-container">
      <Search />
      <Table />
    </div>
  );
};

export default Job; 