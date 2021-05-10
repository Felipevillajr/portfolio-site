import "./App.scss";
import Home from "./Pages/Home/Home.jsx";
import React from "react";
import Header from "./Components/Header/Header";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Portfolio from "./Pages/Portfolio/Portfolio";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Services from "./Pages/Services/Services";
import newHome from "./Pages/NewHome/NewHome";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/newHome" component={newHome} />
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contactme" component={ContactMe} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
