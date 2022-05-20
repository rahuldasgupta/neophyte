import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/index';
import home from "./pages/home/home.js";
import about from "./pages/about/about.js";
import neometry_screen from "./pages/neometry/neometry.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" component={about} />
          <Route path="/neometry" component={neometry_screen} />
          <Route exact path="/" component={home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
