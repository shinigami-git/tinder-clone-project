import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chats from "./components/Chats/Chats";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import Header from "./components/Header/Header";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import TinderCards from "./components/TinderCards/TinderCards";
import {db} from "./db"

// const db = [
//   {
//     name: "Emma Watson",
//     url: "https://images2.alphacoders.com/800/thumb-1920-80030.jpg",
//   },
//   {
//     name: "Kristen Stewart",
//     url:
//       "https://wallpapersdsc.net/wp-content/uploads/2016/01/Kristen-Stewart-Wallpaper.jpg",
//   },
// ];
const alreadyRemoved = [];
let charactersState = db;

function App() {
  // const [peopleOptions, setPeopleOptions] = useState([
  //   [
  //     {
  //       name: "Emma Watson",
  //       url: "https://images2.alphacoders.com/800/thumb-1920-80030.jpg",
  //     },
  //     {
  //       name: "Kristen Stewart",
  //       url:
  //         "https://wallpapersdsc.net/wp-content/uploads/2016/01/Kristen-Stewart-Wallpaper.jpg",
  //     }
  //   ]
  // ]);
  const [peopleOptions, setPeopleOptions] = useState(db);
  const [lastDirection, setLastDirection] = useState();
  const childRefs = useMemo(
    () =>
      Array(peopleOptions.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person" exact>
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat" exact>
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/" exact>
            <Header />
            <TinderCards
              peopleOptions={peopleOptions}
              setPeopleOptions={setPeopleOptions}
              childRefs={childRefs}
              alreadyRemoved={alreadyRemoved}
              lastDirection={lastDirection}
              setLastDirection={setLastDirection}
            />
            <SwipeButtons
              peopleOptions={peopleOptions}
              setPeopleOptions={setPeopleOptions}
              childRefs={childRefs}
              alreadyRemoved={alreadyRemoved}
            />
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
