import React from 'react'
import {Link} from "react-router-dom"
function User() {
    return (
        <div className="home">
            <img className="homeImg" src="/img/HOME.jpg" alt="" />
            <div className="home-title">
                <h1>Welcome to University of Nueva Caceres</h1>
                <h3>Event Facility Management System</h3>
            </div>
            <div className="button-home">
                <Link to="/reservation">
                    <button className="home-sign-in"> Set Reservation</button>
                </Link>
                
                <Link to="/viewapproval">
                    <button className="home-sign-up">View Approval</button>
                </Link>
                <Link to="/">
                    <button className="home-sign-up">Logout</button>
                </Link>
            </div>
        
    </div>
    )
}

export default User
