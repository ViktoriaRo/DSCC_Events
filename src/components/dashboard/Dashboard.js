import React, { Component } from 'react';
import Notifications from './Notifications';
import EventList from '../events/EventList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        const { events, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <EventList events={events}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return {
        events: state.firestore.ordered.events,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'events', orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 4, orderBy: ['time', 'desc']}
    ])
)(Dashboard);