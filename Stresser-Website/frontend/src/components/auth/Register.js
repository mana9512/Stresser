import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import PropTypes from "prop-types";

const Register = ({ register, isAuthenticated, createMessage }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      return register(username, password, email);
    }
  };

  // if (isAuthenticated) {
  //   console.log("test");
  //   return <Redirect to="/login" />;
  // }

  return (
    <Fragment>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form
                method="POST"
                className="register-form"
                id="register-form"
                onSubmit={(e) => onSubmit(e)}
                autoComplete="off"
              >
                <div className="form-group">
                  <label for="re-pass">
                    <i className="fas fa-user-friends"></i>
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div className="form-group">
                  <label for="email">
                    <i className="fas fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Your Email"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="password">
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
                  <label for="password2">
                    <i className="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    value={password2}
                    placeholder="Repeat your password"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img
                  src={"/static/frontend/img/signup-image.jpg"}
                  alt="sing up imagee"
                />
              </figure>
              Already have an account ? <Link to="/login">Login</Link>
              {/* <a href="#" className="signup-image-link">I am already member</a> */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  createMessage: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
