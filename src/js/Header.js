import React from 'react';
import styles from '../css/Header.module.css'; // Ensure this path is correct and the file exists

const Header = () => {
  console.log('Header Styles:', styles); // Debugging line to check if styles are imported correctly

  return (
    <header className={styles.header}>
      <h1>My Project</h1>
    </header>
  );
};

export default Header;
