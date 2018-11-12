import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../../store/actions/eventActions';

class CreateEvent extends Component {
    state ={
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createEvent(this.state)
    }
    render() {
        return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create new Event</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Event Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => dispatch(createEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(CreateEvent);
