import React, { useEffect, useRef } from 'react';
import './Popup.css';

const Popup = ({ id, target, onClose }) => {
  const popupRef = useRef(null);
  const OL = 'opened-layer';

  useEffect(() => {
    const popup = popupRef.current;
    if (!popup) return;

    // 선택된 팝업 표시
    const selectedPopup = document.getElementById(id);
    if (selectedPopup) {
      selectedPopup.style.display = 'block';
      selectedPopup.classList.add(OL);

      // 사이드 팝업인 경우 추가 클래스 적용
      if (target === 'side') {
        selectedPopup.classList.add('popup-side');
      }
    }

    // 팝업 타이틀 설정
    if (id === 'project-create') {
      const popupTitle = selectedPopup.querySelector('.pop-tit');
      if (popupTitle) {
        popupTitle.textContent = target === 'create' ? '프로젝트 등록' : '프로젝트 상세보기';
      }
    } else if (id === 'mem-date-count') {
      const popupTitle = selectedPopup.querySelector('.pop-tit');
      const memberSelect = selectedPopup.querySelector('.random-cal .member-select');
      if (popupTitle) {
        popupTitle.textContent = target === 'mypage' ? '나의 Daily 공수' : '직원 공수 상세보기';
      }
      if (memberSelect) {
        memberSelect.style.display = target === 'mypage' ? 'none' : 'block';
      }
    }

    // 팝업 외부 클릭 이벤트
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.popup') && 
          !e.target.closest('.btn-popup-view') && 
          !e.target.closest('.item-layer, .datepicker')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      if (selectedPopup) {
        selectedPopup.classList.remove(OL, 'popup-side');
      }
    };
  }, [id, target, onClose]);

  const handleClose = () => {
    onClose();
  };

  const handleBack = () => {
    const selectedPopup = document.getElementById(id);
    if (selectedPopup) {
      selectedPopup.classList.remove(OL, 'popup-side');
    }
  };

  return (
    <div className="popup opened-layer" ref={popupRef}>
      <button className="popup-close" onClick={handleClose}>
        <i className="ri-close-line"></i>
      </button>
      <div className="popup-body">
        <h3 className="pop-tit">프로젝트 등록</h3>
        <div id={id}>
          {/* 팝업별 컨텐츠 */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
