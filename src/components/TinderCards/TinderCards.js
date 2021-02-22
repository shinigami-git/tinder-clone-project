import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../../firebase"
import "./tinderCards.css";

const TinderCards = () => {
  const [peopleOptions, setPeopleOptions] = useState([]);

//   {
//     name: "Emma Watson",
//     url: "https://images2.alphacoders.com/800/thumb-1920-80030.jpg",
//   },
//   {
//     name: "Kristen Stewart",
//     url:
//       "https://wallpapersdsc.net/wp-content/uploads/2016/01/Kristen-Stewart-Wallpaper.jpg",
//   },

  useEffect(() => {
      database.collection('peopleOptions').onSnapshot(snapshot=>(
          setPeopleOptions(snapshot.docs.map(doc=>doc.data()))
      ))
      
  }, [])
  
  return (
    <div>
      {/* <h1>Tinder Cards</h1> */}
      <div className="tinderCards-container">
        {peopleOptions.map((person) => (
          <TinderCard className="swipe" key={person.name}>
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
              preventSwipe={["up", "down"]}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
