import React, { Fragment } from 'react'
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AppointmentSuccess = () => {
    let avail=JSON.parse(localStorage.getItem('availability'))
    console.log(JSON.parse(localStorage.getItem('availability')));
    return (
        <Fragment>
           
            <div id="booked">
                <img id="img" src={"/static/frontend/img/img.png"} srcset={"/static/frontend/img/img.png 1x, /static/frontend/img/img@2x.png 2x" }/>
                <div id="Thank_you_for_using_our_websit">
                    <span>Thank you for using our website.<br />Your Appointment has been scheduled on<br /><br /> Date: {avail['date']}  and at <br />Time: {avail['slot']}.<br /><br />Also for the same an email has been sent to you!</span><br/>
	            </div>
            </div>
            
            </Fragment>
       
    )
}
// AppointmentSuccess.propTypes = {
//   };
  
//   const mapStateToProps = (state) => ({
//   });
  
export default (AppointmentSuccess);
