import React, { Fragment } from "react";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
  return (
    <Fragment>
      <div className="headerBar">
        <div className="row">
          <div className="logo col-2">Stresser</div>
          <div className="col-8" style={{ textAlign: "center" }}>
            <div className="menu">
              <Link to="/bookappointment" className="navMenuItem float">
                Appointment Booking
              </Link>
              <div className="navMenuItem float">Chat</div>
              <div className="navMenuItem float">Article & Surveys</div>
              <div className="navMenuItem float">About</div>
            </div>
          </div>
		  
          <div className="col-2" style={{ textAlign: "right" }}>
            <Link to="/login" className="navMenuItem">
              Login
            </Link>
			 
            <a className="navMenuItem float" onClick={logout} href="#!">
              Logout
            </a>
            <Link to="/register" className="navMenuItem">
              Register
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

// export default Navbar;
