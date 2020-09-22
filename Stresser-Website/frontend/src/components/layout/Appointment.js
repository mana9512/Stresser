import React, { Fragment } from 'react'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    // const [formData, setFormData] = useState({
    //     username: "",
    //     password: "",
    //   });
    
    //   const { username, password } = formData;
    
    //   const onChange = (e) =>
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    
    //   const onSubmit = (e) => {
    //     e.preventDefault();
    //     return login(username, password);
    //   };
    return (
        <Fragment>
            <div id="Manshree">
                <div className="headerBar">
                    <div className="row">
                        <div className="logo col-2">Stresser</div>
                        <div className="select-option col-4">
                            <select className="doctor-list">
                                <option value="">Select Doctor</option>
                                <option value="">Doctor's Name</option>
                                <option value="">Doctor's Name</option>
                            </select>
                        </div>
                        <div className="col-6" style={{ textAlign: "right" }}>
                            <div className="menu">
                                <button className="appo-button">Appoinments</button>
                                <button className="appo-button">Walk-in</button>
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
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="Appointment-Date"
                                        label="Appointment-Date"
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
                                        <button className="slot-times" data-value="9:00 AM">9:00 AM</button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="9:10 AM">
                                            9:10 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="9:20 AM">
                                            9:20 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6" data-value="9:30 AM">
                                        <button className="slot-times">
                                            9:30 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="9:40 AM">
                                            9:40 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="9:50 AM">
                                            9:50 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="10:00 AM">
                                            10:00 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="10:10 AM">
                                            10:10 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="10:20 AM">
                                            10:20 AM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="10:30 AM">
                                            10:30 AM
                                                </button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="slot-title col-12">
                                        <h3>Evening</h3>
                                        <h5>5:00 PM to 9:00 PM</h5>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="5:00 PM">
                                            5:00 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="5:10 PM">
                                            5:10 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="5:20 PM">
                                            5:20 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6" data-value="5:30 PM">
                                        <button className="slot-times">
                                            5:30 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="5:40 PM">
                                            5:40 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="5:50 PM">
                                            5:50 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="6:00 PM">
                                            6:00 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="6:10 PM">
                                            6:10 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="6:20 PM">
                                            6:20 PM
                                                </button>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <button className="slot-times" data-value="6:30 PM">
                                            6:30 PM
                                                </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Appointment

