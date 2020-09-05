import React, { Fragment } from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
	return (
		<Fragment>
			<div className="headerBar">
				<div className="row">
					<div className="logo col-2">Stresser</div>
					<div className="col-8" style={{ textAlign: "center" }}>
						<div className="menu">
							<div className="navMenuItem float">Appointment Booking</div>
							<div className="navMenuItem float">Chat</div>
							<div className="navMenuItem float">Article & Surveys</div>
							<div className="navMenuItem float">About</div>
							

						</div>
					</div>

					<div className="col-2" style={{ textAlign: "right" }}>
						<Link to="/login"  className="navMenuItem">
                			Login
              			</Link>
						<Link to="/register" className="navMenuItem">
                			Register
              			</Link>

					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Navbar



