import React, { useEffect, useState } from 'react';
import { Table } from '../../components';
import { rows, columns } from '../../data/ps';
import './ProblemStatements.scss';

const ProblemStatements = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='ps-page'>
      <nav className={`${isSticky ? 'sticky-nav' : ''}`}>
        {/* Your existing navbar content */}
      </nav>
      <h1 className='ps-title'>Problem Statements</h1>
      <Table className='ps-table' rows={rows} columns={columns} />
    </div>
  );
};

export default ProblemStatements;