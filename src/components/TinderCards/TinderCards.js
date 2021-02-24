import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../../firebase";
import "./tinderCards.css";

const TinderCards = ({childRefs,peopleOptions,setPeopleOptions,alreadyRemoved,lastDirection,setLastDirection}) => {

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }
  
  

  // useEffect(() => {
  //   const unsubscribe = database
  //     .collection("peopleOptions")
  //     .onSnapshot((snapshot) =>
  //       setPeopleOptions(snapshot.docs.map((doc) => doc.data()))
  //     );

  //     return()=>{
  //         unsubscribe();
  //     }

  // }, [peopleOptions]);
 

  return (
    <div>
      {/* <h1>Tinder Cards</h1> */}
      <div className="tinderCards-container">
        {peopleOptions.map((person,index) => (
          <TinderCard className="swipe" key={person.name} ref={childRefs[index]} onSwipe={(dir) => swiped(dir, person.name)} >
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
