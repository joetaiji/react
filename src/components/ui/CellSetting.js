import React, { useState, useEffect, useRef } from 'react';
import './CellSetting.css';

const CellSetting = () => {
  const [isActive, setIsActive] = useState(false);
  const cellViewRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cellViewRef.current && !cellViewRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`cell-view-set ${isActive ? 'active' : ''}`} ref={cellViewRef}>
		<button className="btn-cell-set sm" onClick={handleClick}>보기 설정</button>
		<div className="item-layer">
			<div className="title">
				<strong>보기 설정</strong>
				<button type="button" className="btn-reset">
					<i className="ri-restart-line"></i>
					<span>기본설정</span>
				</button>
			</div>		
			<div className="cont">						
				<div className="scont scont-on"></div>	
				<div className="stitle">
					<strong className="s-title">숨기기</strong>
					<button className="item-all">모두보기</button>
				</div>	
				<div className="scont scont-off"></div>
			</div>		
		</div>
	</div>
  );
};

export default CellSetting;
