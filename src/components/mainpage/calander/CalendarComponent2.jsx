import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import '../../../style/customCalendar.css';

function CalendarComponent({ onDateClick }) {
    const [isInitialRender,] = useState(true);

    const handleDateClick = (info) => {
        onDateClick(info.dateStr);
    };

    const renderEventContent = (eventInfo) => {
        return (
            <div className="custom-event-content">
                <span>{eventInfo.event.title}</span>
            </div>
        );
    };

    const renderDayCellContent = (dayCellContent) => {
        return dayCellContent.dayNumberText.replace('일', ''); // '일' 제거
    };

    useEffect(() => {
        if (isInitialRender) {
            // 날짜 셀이 렌더링된 후 5주만 표시하고 나머지 숨기기
            const calendarApi = document.querySelector('.fc-daygrid-body');
            const weeks = calendarApi.querySelectorAll('table.fc-scrollgrid-sync-table tbody tr');
            weeks.forEach((week, index) => {
                if (index >= 5) {
                    week.classList.add('hidden-week');
                }
            });

        }
    }, [isInitialRender])

    return (
        <div className="container">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: 'prev',
                    center: 'title',
                    end: 'next'
                }}
                height="85vh"
                dateClick={handleDateClick}
                events={[
                    // { title: '배달의 민족', start: '2024-07-18T10:00:00', end: '2024-07-20T12:00:00', color: '#f4cdac' },
                    // { title: '엘지', start: '2024-07-19T09:00:00', end: '2024-07-23T10:00:00', color: '#aee1ce' },
                    // { title: 'Github', start: '2024-07-18T08:00:00', end: '2024-07-30T09:00:00', color: '#e7a1a1' }
                ]}
                eventOrder="start,-duration,allDay,title"
                displayEventTime={false}
                eventContent={renderEventContent}
                locales={[koLocale]}
                locale="ko"
                titleFormat={{ month: 'long' }} // '7월' 형태로 표시
                dayCellContent={renderDayCellContent} // 날짜 타일에서 '일' 제거
            />
        </div>
    );
}

export default CalendarComponent;
