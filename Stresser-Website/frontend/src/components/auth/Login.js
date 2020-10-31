import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";
// import SocialAuth from "./SocialAuth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    return login(username, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <section className="sign-in">
      <br/>
      <br/>
      <br/>
      <br/>
    
      
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img
                  src={"/static/frontend/img/signin-image.jpg"}
                  alt="sing up image"
                />
              </figure>
              Don't have an account ? <Link to="/register">Register</Link>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign up</h2>
              <form
                method="POST"
                className="register-form"
                onSubmit={(e) => onSubmit(e)}
                id="login-form"
                autoComplete="off"
              >
                <div className="form-group">
                  <label htmlFor="username">
                    <i className="fas fa-envelope"></i>
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    placeholder="Your Username"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="agree-term"
                  />
                  <label htmlFor="remember-me" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    Remember me
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </Fragment>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
