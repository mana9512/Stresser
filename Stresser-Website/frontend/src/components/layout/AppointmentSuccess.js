import React from 'react'
import { Link, Redirect } from "react-router-dom";

const AppointmentSuccess = () => {
    return (
        <div>
            <h1>Thank You</h1>
            <h4>Your appointment has benen Scheduled.</h4>
            <Link to="/">Home</Link>
        </div>
       
    )
}

export default AppointmentSuccess