import React from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_TITLES } from '../constants/pageTitles';
import './PageTitle.css';

export default function PageTitle() {	
  const location = useLocation();
  const title = PAGE_TITLES[location.pathname] || '대시보드'; // 기본값으로 '대시보드' 사용
  
  return (
    <h2 className="page-title">{title}</h2>
  );
}
