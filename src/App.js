import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chats from "./components/Chats/Chats";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import Header from "./components/Header/Header";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import TinderCards from "./components/TinderCards/TinderCards";

function App() {
  return (
    <div className="App">
      
      <Router>
      
        <Switch>
        <Route path="/chat/:person" exact>
          <Header backButton ="/chat" />
            <ChatScreen/>
          </Route>
          
          <Route path="/chat" exact>
          <Header backButton="/" />
            <Chats/>
          </Route>
          <Route path="/" exact>
          <Header  />
            <TinderCards/>
            <SwipeButtons/>
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
