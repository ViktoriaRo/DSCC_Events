import React, { Component } from 'react';
import EventList from '../events/EventList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
    render(){
        const { events, auth } = this.props;

        const getMyEvents = (events, auth) => {
            return events.filter(event => event.authorId === auth.uid)
        }
        const myEvents = getMyEvents(events, auth)

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <EventList events={myEvents}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return {
        events: state.firestore.ordered.events,
        auth: state.firebase.auth
    }
}
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'events', orderBy: ['createdAt', 'desc']}
    ])
)(Dashboard);