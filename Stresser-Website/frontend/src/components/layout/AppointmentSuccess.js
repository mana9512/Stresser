import React, { Fragment } from 'react'
import { Link, Redirect } from "react-router-dom";

const AppointmentSuccess = () => {
    return (
        <Fragment>
            {/* <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Thank You</h1>
            <h4>Your appointment has been Scheduled.</h4>
            <Link to="/">Home</Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/> */}
            <div id="Web_1920__1">
                <img id="img" src={"/static/frontend/img/img.png"} srcset={"/static/frontend/img/img.png 1x, /static/frontend/img/img@2x.png 2x" }/>
                <div id="Thank_you_for_using_our_websit">
                    <span>Thank you for using our website.<br />Your Appointment has been scheduled on<br /><br /> Date: 24-10-2020  and at <br />Time: 5:10pm.<br /><br />Also for the same an email has been sent to you!</span><br/>
	            </div>
            </div>
            
            </Fragment>
       
    )
}

export default AppointmentSuccess