import React from 'react';

export default function DaySelector({ daysList, currentDay, clickHandler }) {
    return (<div className="day-selector">
            {daysList.map((day) => {
                if(day === currentDay) {
                    return <button type="button" className="active-day-button" key={day}>Today</button>;
                }
                return <button type="button" onClick={() => clickHandler(day)} key={day}>{day}</button>})}
        </div>)
}