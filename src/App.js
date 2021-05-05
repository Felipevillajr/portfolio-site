import "./App.scss";
import Home from "./Pages/Home/Home.jsx";
import React from "react";
import Header from "./Components/Header/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact match="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
