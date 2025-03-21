import React, { useState } from 'react';
import ItemLayer from './ItemLayer';
import './Table.css';

const Table = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  const handleLayerClick = (e) => {
    const layerType = e.target.closest('[data-layer]')?.dataset.layer;
    if (layerType) {
      setActiveLayer(layerType);
    }
  };

  return (
    <div className="table-container">
      <div className="table sortable" onClick={handleLayerClick}>
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
          <caption></caption>
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
            <tr>
              <td className="row-btn-control">
                <div className="user-group">
                  <span className="user-icon">
                    <img src="/images/photo.png" alt="user" />
                  </span>
                  <span className="user-icon">김</span>
                  <span className="user-icon">정</span>
                  <span className="user-sum">+2명</span>
                </div>
                <span className="btn-draggable"><i className="ri-draggable"></i></span>
              </td>
              <td>
                <span data-layer="typeItem" contentEditable>홈페이지구축, 유지보수</span>
              </td>
              <td>
                <span data-layer="projectItem" contentEditable>2024년 연구개발특구진흥재단 홈페이지 기능 개선 및 유지보수 용역</span>
                <button className="btn xsm btn-popup-view" data-id="project-create">
                  <i className="ri-search-2-line"></i>상세보기
                </button>
              </td>
              <td>
                <span data-layer="ordererItem" className="orderer" contentEditable>(재)연구개발특구진흥재단</span>
              </td>
              <td>
                <span data-layer="deptItem" contentEditable>MX</span>
              </td>
              <td>
                <span data-layer="managerItem" contentEditable>
                  <span className="user-icon">김</span> 김정서
                </span>
              </td>
              <td>
                <span className="amount" contentEditable>51,840,000</span>
              </td>
              <td>
                <span className="amount" contentEditable>0</span>
              </td>
              <td>
                <span className="amount warning" contentEditable>0</span>
              </td>
              <td>
                <span className="input-date ic-cal">
                  <input type="text" className="form-control" defaultValue="2024-08-30" />
                </span>
              </td>
              <td>
                <span className="input-date ic-cal">
                  <input type="text" className="form-control" defaultValue="2025-05-12" />
                </span>
              </td>
              <td>
                <span data-layer="statusItem" className="state before">착수전</span>
              </td>
              <td style={{ display: 'none' }}>
                <span data-layer="corpItem" contentEditable>플랜파트너스</span>
              </td>
              <td style={{ display: 'none' }}>
                <span contentEditable>15234596</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ItemLayer activeLayer={activeLayer} />
    </div>
  );
};

export default Table;
