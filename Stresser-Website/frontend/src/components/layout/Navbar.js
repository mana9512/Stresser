import React, { Fragment } from 'react';


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
						<div className="navMenuItem">Log in</div>
						<div className="navMenuItem">Register</div>

					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Navbar



