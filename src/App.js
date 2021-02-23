import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import TinderCards from "./components/TinderCards/TinderCards";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact>
            <TinderCards/>
            <SwipeButtons/>
          </Route>
          <Route path="/chat" exact>
            <h1>Here goes the chat page</h1>
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
