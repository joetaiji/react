import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import './Calendar.css';

const Calendar = () => {
    const [events, setEvents] = useState([
        {
            title: '주간회의',
            start: '2025-03-24T09:00:00',
            className: 'schedule-1',
            description: '칸쿤 회의실'
        },
        {
            title: '개발 협력사 미팅',
            start: '2025-03-24T14:00:00',
            end: '2025-02-24T16:00:00',
            className: 'schedule-5',
            description: '한국생명공학연구원'
        },
        {
            title: '휴가',
            start: '2025-03-25T11:00:00',
            className: 'schedule-3',
            description: '세종산업인력공단'
        },
        {
            title: '입금완료',
            start: '2025-03-26T09:00:00',
            className: 'schedule-2',
            description: '대전테크노파크'
        },
        {
            title: '설계 및 디자인 회의',
            start: '2025-03-26T14:00:00',
            className: 'schedule-1',
            description: '하와이 회의실'
        },
        {
            title: '장기 미수 잔금 알림',
            start: '2025-03-27T14:00:00',
            className: 'schedule-4',
            description: '세종시청'
        },
        {
            title: '출장 - 고객사 미팅',
            start: '2025-03-24',
            end: '2025-03-27',
            className: 'schedule-5',
            description: "한국생명공학연구원"
        },
        {
            title: '출장 - 고객사 미팅',
            start: '2025-03-25',
            end: '2025-03-28',
            className: 'schedule-5',
            description: "지방산업혁신센터"
        }
    ]);

    const handleEventFilter = (e) => {
        const className = e.target.name;
        const isChecked = e.target.checked;
        
        setEvents(prevEvents => 
            prevEvents.map(event => {
                if (event.className === className) {
                    return {
                        ...event,
                        display: isChecked ? 'auto' : 'none'
                    };
                }
                return event;
            })
        );
    };

    const handleShowAll = () => {
        const checkboxes = document.querySelectorAll('.calendar-legend input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        setEvents(prevEvents => 
            prevEvents.map(event => ({
                ...event,
                display: 'auto'
            }))
        );
    };

    const handleReset = () => {
        const checkboxes = document.querySelectorAll('.calendar-legend input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = checkbox.value === 'Y';
        });
        setEvents(prevEvents => 
            prevEvents.map(event => ({
                ...event,
                display: event.value === 'Y' ? 'auto' : 'none'
            }))
        );
    };

    return (
        <div className="calendar-container">
            <div className="calendar-legend cell-view-set">
                <button className="btn-cell-set sm">보기 설정</button>
                <div className="item-layer">
                    <div className="title">
                        <strong>보기 설정</strong>
                        <button type="button" className="btn-reset" onClick={handleReset}>
                            <i className="ri-restart-line"></i>
                            <span>기본설정</span>
                        </button>
                    </div>		
                    <div className="cont">						
                        <div className="scont scont-on">									
                            <label className="cell-item">
                                <input type="checkbox" data-col="1" name="schedule-1" value="Y" defaultChecked onChange={handleEventFilter} />회사
                            </label>
                            <label className="cell-item">
                                <input type="checkbox" data-col="2" name="schedule-2" value="Y" defaultChecked onChange={handleEventFilter} />대관
                            </label>
                            <label className="cell-item">
                                <input type="checkbox" data-col="4" name="schedule-4" value="Y" defaultChecked onChange={handleEventFilter} />생일 및 입사
                            </label>
                            <label className="cell-item">
                                <input type="checkbox" data-col="5" name="schedule-5" value="Y" defaultChecked onChange={handleEventFilter} />내일정
                            </label>
                        </div>	
                        <div className="stitle">
                            <strong className="s-title">숨기기</strong>
                            <button className="item-all" onClick={handleShowAll}>모두보기</button>
                        </div>	
                        <div className="scont scont-off">
                            <label className="cell-item off">
                                <input type="checkbox" data-col="3" name="schedule-3" value="N" onChange={handleEventFilter} />휴가
                            </label>
                        </div>
                    </div>					
                </div>
            </div>
            <div id="calendar">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    headerToolbar={{
                        left: 'title',
                        center: 'timeGridWeek,dayGridMonth,timeGridDay',
                        right: 'today,prev,next'
                    }}
                    buttonText={{
                        timeGridWeek: '주',
                        dayGridMonth: '월',
                        today: '오늘'
                    }}
                    locale={koLocale}
                    dayOfMonthFormat="D"
                    navLinks={true}
                    businessHours={{
                        startTime: '9:00',
                        endTime: '18:00'
                    }}
                    weekends={false}
                    day="narrow"
                    editable={true}
                    selectable={true}
                    scrollTime="09:00:00"
                    events={events}
                    eventContent={(info) => {
                        return (
                            <>
                                <div>{info.event.title}</div>
                                <div className="fc-description">{info.event.extendedProps.description || ''}</div>
                            </>
                        );
                    }}
                    dayCellContent={(arg) => {
                        return arg.dayNumberText.replace('일', '');
                    }}
                />
            </div>
        </div>
    );
};

export default Calendar; 