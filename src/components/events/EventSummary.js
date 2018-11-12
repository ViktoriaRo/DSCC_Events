import React from 'react';

const EventSummary = ({event}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{event.title}</span>
                <p>Posted by me</p>
                <p className="grey-text"> 3rd september</p>
            </div>
        </div>
    )
}

export default EventSummary;