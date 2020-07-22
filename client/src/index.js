import React from "react";
import ReactDOM from "react-dom";
import Sigin from "./components/SignIN/SignIn.js";
import home from "./components/Home/Home.js";
import sigup from "./components/SignUP/Signup.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/sigin" component={Sigin} />
      <Route path="/sigup" component={sigup} />
     
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.querySelector("#root"));
