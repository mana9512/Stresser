import React, { Fragment, useState } from "react";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

//Redux
import { Link, Redirect ,useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checkavailability } from "../../actions/appointment";
import { setAlert } from "../../actions/alert";


var appointmentDate="";

const Appointment = ({checkavailability,booked, isAuthenticated, user, setAlert}) => {
    if(!isAuthenticated){
        setAlert("You need to autheticate prior to book an appointment","danger")
    }
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-10-17T21:11:54'));
    
    const handleDateChange = (date) => {
      setSelectedDate(date);
      appointmentDate=""
      if((date.getMonth()+1)<10){
         appointmentDate+=date.getFullYear() + '-' + '0'+(date.getMonth()+1) + '-' + date.getDate();
      }
      else{
         appointmentDate+=date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
      }

    };
    

    const [formData, setFormData] = useState({
        doctor: "",
        slot:""
        
      });
    
      const { doctor, slot } = formData;
    
      const onChange = (e) =>{
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(slot);
        }
        
    
      const onSubmit = (e) => {
        e.preventDefault();
        return checkavailability(user['id'], slot, appointmentDate, doctor)
      };
      if(booked){
        return <Redirect to="/bookedsuccess" />;
        // history.push('/bookedsuccess')
      }
     

    return (
        <Fragment>
            <form method="POST"  onSubmit={(e) => onSubmit(e)}>
            <div id="Manshree">
                <div className="headerBar" style={{backgroundColor:"#d6f5d6"}}>
                    <div className="row">
                        {/* <div className="logo col-2">Stresser</div> */}
                        <div className="select-option col-4">
                            <select name="doctor" className="doctor-list appo-button" onChange={(e) => onChange(e)} >
                                <option name="doctor" value="">Select Doctor</option>
                                <option name="doctor" value={1}>Dr. Jenifer Nixon</option>
                                <option name="doctor"  value={2}>Dr. Howard Parison</option>
                                <option name="doctor"  value={3}>Dr. Stevie Budd</option>
                            </select>
                        </div>
                        <div className="col-6" style={{ textAlign: "right" }}>
                            <div className="menu">
                                {/* <button className="appo-button">Appoinments</button> */}
                                <button type="submit" value="Book Now" className="appo-button">Book Now</button>
                                                            
                                                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className="appo-section">
                    <div className="trans-bg"></div>
                    <div className="row outer-row" >
                        <div className="cal col-lg-4 col-md-12"style={{ float: "left",height:"90px" }}>
                            <div className="trans-bg">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        style={{color:"white"}}
                                        disableToolbar
                                        variant="inline"
                                        format="yyyy-MM-dd"
                                        margin="normal"
                                        id="AppointmentDate"

                                        label="AppointmentDate"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                       
                                        
                                    </Grid>
                                    </MuiPickersUtilsProvider>
                            </div>
                        </div>
                        <div className="time col-lg-8 col-md-12" style={{ float: "right" }}>
                            <div className="slot">
                                <div className="trans-bg"></div>
                                <div className="row">
                                    <div className="slot-title col-12">
                                        <h3>Morning</h3>
                                        <h5>9:00 AM to 12:00 AM</h5>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" data-value="9:00 AM" onClick={(e) => onChange(e)} value={"09:00:01"}>9:00 AM</button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot"  onClick={(e) => onChange(e)} data-value="9:10 AM" value={"09:10:01"}>
                                            9:10 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" onClick={(e) => onChange(e)} data-value="9:20 AM" value={"09:20:01"}>
                                            9:20 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" onClick={(e) => onChange(e)} data-value="9:30 AM" value={"09:30:01"}>
                                            9:30 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" onClick={(e) => onChange(e)} data-value="9:40 AM" value={"09:40:01"}>
                                            9:40 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" onClick={(e) => onChange(e)} data-value="9:50 AM" value={"09:50:01"}>
                                            9:50 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" onClick={(e) => onChange(e)} data-value="10:00 AM" value={"10:00:01"}>
                                            10:00AM</button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" onClick={(e) => onChange(e)} data-value="10:10 AM" value={"10:10:01"}>
                                            10:10AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" onClick={(e) => onChange(e)} data-value="10:20 AM" value={"10:20:01"}>
                                            10:20AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot"  onClick={(e) => onChange(e)} data-value="10:30 AM" value={"10:30:01"}>
                                            10:30AM
                                                </button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="slot-title col-12">
                                        <h3>Evening</h3>
                                        <h5>5:00 PM to 9:00 PM</h5>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" onClick={(e) => onChange(e)} data-value="5:00 PM" value={"05:00:01"}>
                                            5:00 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" onClick={(e) => onChange(e)} data-value="5:10 PM" value={"05:10:01"}>
                                            5:10 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" onClick={(e) => onChange(e)} data-value="5:20 PM" value={"05:20:01"}>
                                            5:20 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6" >
                                        <button className="slot-times" type="button" name="slot" data-value="5:30 PM" value={"05:30:01"} onClick={(e) => onChange(e)}>
                                            5:30 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" data-value="5:40 PM" value={"05:40:01"} onClick={(e) => onChange(e)}>
                                            5:40 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" data-value="5:50 PM" value={"05:50:01"} onClick={(e) => onChange(e)} >
                                            5:50 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" data-value="6:00 PM" value={"06:00:01"} onClick={(e) => onChange(e)}>
                                            6:00 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" data-value="6:10 PM" value={"06:10:01"} onClick={(e) => onChange(e)}>
                                            6:10 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" data-value="6:20 PM" value={"06:20:01"} onClick={(e) => onChange(e)}>
                                            6:20 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" type="button" name="slot" data-value="6:30 PM" value={"06:30:01"} onClick={(e) => onChange(e)}>
                                        6:30 PM
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </Fragment>
    )
}

Appointment.propTypes = {
    checkavailability: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    user:PropTypes.object,
    booked:PropTypes.bool,
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user:state.auth.user,
    booked:state.appointment.booked
  });
  
  export default connect(mapStateToProps, { checkavailability, setAlert })(Appointment);

