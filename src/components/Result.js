import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/table.css';

const Result = () => {
  const navigate = useNavigate();

  return (
    <div className="result-container">
      <div className="header">
        <h2>필터 결과</h2>
        <button onClick={() => navigate('/')}>
          돌아가기
        </button>
      </div>
      <div className="table sortable">
        <table>
          <colgroup>
            <col className="w3" />
            <col className="w7" />
            <col />
            <col className="w10" />
            <col className="w6" />
            <col className="w6" />
            <col className="w7" />
            <col className="w7" />
            <col className="w7" />
            <col className="w9" />
            <col className="w9" />
            <col className="w5" />
            <col className="w6" style={{ display: 'none' }} />
            <col className="w5" style={{ display: 'none' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">구분</th>
              <th scope="col">프로젝트명</th>
              <th scope="col">발주처</th>
              <th scope="col">부서</th>
              <th scope="col">담당자</th>
              <th scope="col">계약금액</th>
              <th scope="col">매출</th>
              <th scope="col">미수</th>
              <th scope="col">계약일</th>
              <th scope="col">종료일</th>
              <th scope="col">상태</th>
              <th scope="col" style={{ display: 'none' }}>매출법인</th>
              <th scope="col" style={{ display: 'none' }}>관리번호</th>
            </tr>
          </thead>
          <tbody>
            {/* 필터된 결과가 여기에 표시될 것입니다 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result; 