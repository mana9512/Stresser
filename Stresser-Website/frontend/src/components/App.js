import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Footer from "./layout/Footer";
import Register from "./auth/Register";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Question from "./layout/Question";


// REDUX Imports
import store from "../store";
import { Provider } from "react-redux";
import Alert from "./layout/Alert";
import { loadUser } from "../actions/auth";

export class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Alert/>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/question" component={Question} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
