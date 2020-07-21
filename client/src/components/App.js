import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import SignIn from './SignIN/SignIn';
import SignUp from './SignUP/Signup';
import Home from "./Home/Home"
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Router exact path="/" component = {Home} />
      </div>
      <section>
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/Signup' component={SignUp} />
      </section>
    </Router>
  );
}
export default App;
