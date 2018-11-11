import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">New Event</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lightening-1">VR</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;