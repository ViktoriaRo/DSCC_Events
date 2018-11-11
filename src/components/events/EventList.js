import React from 'react';
import EventSummary from './EventSummary';

const EventList = () => {
    return (
        <div className="project-list section">
            <EventSummary />
            <EventSummary />
            <EventSummary />
        </div> 
    )
}

export default EventList;