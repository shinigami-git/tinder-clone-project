import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <TinderCards/>
          </Route>
          <Route path="/chat" exact>
            <h1>This is chat page</h1>
          </Route>
          {/* Tinder Cards */}
          {/* Buttons below tinder cards */}
          {/* Chat Screen */}
          {/* INdividual chat screen */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
