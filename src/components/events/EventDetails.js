import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const EventDetails = (props) => {
    const { event, auth} = props;
    if (!auth.uid) return <Redirect to='/signin' />

    if (event) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ event.title }</span>
                        <p>{ event.content }</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by { event.authorFirstName } { event.authorLastName }</div>
                        <div>2nd septembber</div>
                    </div>
                </div>
        </div>
        )
    } else {
         return (
              <div className="container center">
                  <p>Loading event...</p>
              </div>
            )
        }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const events = state.firestore.data.events;
    const event = events ? events[id] : null
    return {
        event: event,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'events' }
    ])
)(EventDetails)
