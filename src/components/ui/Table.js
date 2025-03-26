import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ItemLayer from './ItemLayer';
import { tableColumns, tableRows } from '../../constants/tableData';
import './Datepicker.css';
import './Table.css';

const Table = () => {
  const [activeLayer, setActiveLayer] = useState(null);
  const [dates, setDates] = useState({});

  const handleLayerClick = (e) => {
    const layerElement = e.target.closest('[data-layer]');
    if (layerElement) {
      // 이전에 item-blank 클래스를 가진 요소가 있다면 제거
      const prevItemBlank = document.querySelector('.item-blank');
      if (prevItemBlank) {
        prevItemBlank.classList.remove('item-blank');
      }
      
      // 클릭한 요소에 item-blank 클래스 추가
      layerElement.classList.add('item-blank');
      setActiveLayer(layerElement.dataset.layer);
    }
  };

  const handleDateChange = (date, rowId, field) => {
    setDates(prev => ({
      ...prev,
      [`${rowId}-${field}`]: date
    }));
  };

  const renderUserGroup = (users) => {
    return (
      <div className="user-group">
        {users.map((user, index) => (
          user.type === 'image' ? (
            <span key={index} className="user-icon">
              <img src={user.value} alt={user.alt} />
            </span>
          ) : user.type === 'sum' ? (
            <span key={index} className="user-sum">{user.value}</span>
          ) : (
            <span key={index} className="user-icon">{user.value}</span>
          )
        ))}
      </div>
    );
  };

  return (
    <div className="table-container">
      <div className="table sortable" onClick={handleLayerClick}>
        <table>
          <colgroup>
            {tableColumns.map((col, index) => (
              <col key={index} className={col.className} style={col.hidden ? { display: 'none' } : undefined} />
            ))}
          </colgroup>
          <caption></caption>
          <thead>
            <tr>
              {tableColumns.map((col, index) => (
                <th key={index} scope="col" style={col.hidden ? { display: 'none' } : undefined}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.id}>
                <td className="row-btn-control">
                  {renderUserGroup(row.users)}
                  <span className="btn-draggable"><i className="ri-draggable"></i></span>
                </td>
                <td>
                  <span data-layer="typeItem">{row.type}</span>
                </td>
                <td>
                  <span data-layer="projectItem" contentEditable>{row.project}</span>
                  <button className="btn xsm btn-popup-view" data-id="project-create">
                    <i className="ri-search-2-line"></i>상세보기
                  </button>
                </td>
                <td>
                  <span data-layer="ordererItem" className="orderer" contentEditable>{row.orderer}</span>
                </td>
                <td>
                  <span data-layer="deptItem" contentEditable>{row.department}</span>
                </td>
                <td>
                  <span data-layer="managerItem" className="item-btn" contentEditable>
                    {row.manager.name}
                  </span>
                </td>
                <td>
                  <span className="amount" contentEditable>{row.contractAmount}</span>
                </td>
                <td>
                  <span className="amount" contentEditable>{row.sales}</span>
                </td>
                <td>
                  <span className="amount warning" contentEditable>{row.unpaid}</span>
                </td>
                <td>
                  <span className="input-date ic-cal">
                    <DatePicker
                      selected={dates[`${row.id}-contractDate`] || new Date(row.contractDate)}
                      onChange={(date) => handleDateChange(date, row.id, 'contractDate')}
                      dateFormat="yyyy-MM-dd"
                      locale="ko"
                      className="form-control"
                      placeholderText="날짜 선택"
                    />
                  </span>
                </td>
                <td>
                  <span className="input-date ic-cal">
                    <DatePicker
                      selected={dates[`${row.id}-endDate`] || new Date(row.endDate)}
                      onChange={(date) => handleDateChange(date, row.id, 'endDate')}
                      dateFormat="yyyy-MM-dd"
                      locale="ko"
                      className="form-control"
                      placeholderText="날짜 선택"
                    />
                  </span>
                </td>
                <td>
                  <span data-layer="statusItem" className={`state ${row.status.className}`}>{row.status.text}</span>
                </td>
                <td style={{ display: 'none' }}>
                  <span data-layer="corpItem" contentEditable>{row.salesCorp}</span>
                </td>
                <td style={{ display: 'none' }}>
                  <span contentEditable>{row.managementNumber}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ItemLayer activeLayer={activeLayer} setActiveLayer={setActiveLayer} />
    </div>
  );
};

export default Table;
