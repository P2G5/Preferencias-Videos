import React from "react";
import ReactDOM from "react-dom";
import Sigin from "./components/SignIN/SignIn.js";
import SignUp from "./components/SignUP/Signup";
import home from "./components/Home/Home.js";
import Profil from "./components/Profile/profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/SignIN" component={Sigin} />
      <Route path="/SignUP" component={SignUp} />
      <Route path="/Profil" component={Profil} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.querySelector("#root"));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App1 from './components/App';
// ReactDOM.render(
//   <React.StrictMode>
//     <App1 />

// </React.StrictMode>,
//   document.querySelector('#root')
// );
