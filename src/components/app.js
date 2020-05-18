import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./home";
import ScrapedInfo from "./scrapedinfo";
import NavigationContainer from "../components/navigation-container/navigation";
import About from "./about";
import footer from "./footer/footer";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
