import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../../firebase";
import "./tinderCards.css";

const TinderCards = ({
  childRefs,
  peopleOptions,
  setPeopleOptions,
  alreadyRemoved,
  lastDirection,
  setLastDirection,
  setAlreadyRemoved,
  liked,
  setLiked,
  disLiked,
  setDisLiked,
  superLiked,
  setSuperLiked
}) => {
  
  // useEffect(() => {
  //   setAlreadyRemoved([]);
  // }, [])
  
  const swiped = (direction, nameToDelete) => {
    
    
    
    // console.log(direction);
    if(direction==='up'){

      setSuperLiked([...superLiked,nameToDelete]);
      // console.log(superLiked); 
     }
     if(direction==='right'){
       setLiked([...liked,nameToDelete]);
      //  console.log(liked); 
      }
      if(direction==='left'){
       setDisLiked([...disLiked,nameToDelete]);
      //  console.log(disLiked); 

      }

    // console.log(setAlreadyRemoved());
    setAlreadyRemoved([...alreadyRemoved,nameToDelete ]);
    // console.log(alreadyRemoved);
    // alreadyRemoved.push(nameToDelete);
  };

  // const outOfFrame = (name) => {
  //   console.log(name + " left the screen!");
  //   setCharactersState (charactersState.filter(
  //     (character) => character.name !== name
  //   ));
  //   setPeopleOptions(charactersState);
  // };

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
        {peopleOptions.map((person, index) => (
          <TinderCard
            className="swipe"
            key={person.name}
            ref={childRefs[index]}
            onSwipe={(dir) => swiped(dir, person.name)}
            preventSwipe={[ "down"]}
          >
            {/* onCardLeftScreen={() => outOfFrame(person.name)} */}
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
              
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
