import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../style/main.less";
import LoginSignUp from "./LoginSignup";
import Dashboard from "./Dashboard";
import LandingPage from "./Landingpage";
import Profile from './Profile';
import Cards from './Cards';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="header">Login or Signup</h1> */}
        <BrowserRouter>
          <div>
            {/* <ul className="row">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/home">Users</Link>
              </li>
            </ul> */}
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signin" component={LoginSignUp} />
            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/cards" component={Cards} />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;