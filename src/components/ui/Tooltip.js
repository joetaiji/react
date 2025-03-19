import React from 'react';
import './Tooltip.css';

const Tooltip = () => {
 

  return (
    <div className="tooltip">
		<span className="warning tooltip-fixed">
			<strong className="title"><i className="ri-information-fill"></i>한국에너지기술연구원 대표홈페이지 메인디자인 개편</strong>									
			<span>프로젝트 계약 기간이 50% 남았습니다. 일정을 확인해주세요.</span>
		</span>	
    </div>
  );
};

export default Tooltip;
