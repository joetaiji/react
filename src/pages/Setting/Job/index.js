import React from 'react';
import Search from '../../../components/ui/Search';
import Table from '../../../components/ui/Table';
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