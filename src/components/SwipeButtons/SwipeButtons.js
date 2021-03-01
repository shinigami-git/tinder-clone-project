import React, { useState, useEffect } from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "./swipeButtons.css";

const SwipeButtons = ({
  childRefs,
  peopleOptions,
  setPeopleOptions,
  alreadyRemoved,
  setAlreadyRemoved,
  liked,
  setLiked,
  disLiked,
  setDisLiked,
  superLiked,
  setSuperLiked,
}) => {

  // useEffect(() => {
  //   setAlreadyRemoved([]);
  // }, [])

  // const [cardsLeft, setCardsLeft] = useState([]);

  const swipe = (dir) => {
    const cardsLeft = peopleOptions.filter(
      (person) => !alreadyRemoved.includes(person.name)
      
    );
    
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      if(dir==='up'){
        setSuperLiked([...superLiked,toBeRemoved]);
        // console.log(superLiked); 
       }
       if(dir==='right'){
         setLiked([...liked,toBeRemoved]);
        //  console.log(liked); 
        }
        if(dir==='left'){
         setDisLiked([...disLiked,toBeRemoved]);
        //  console.log(disLiked); 
        }
      const index = peopleOptions
        .map((person) => person.name)
        .indexOf(toBeRemoved); // Find the index of which to make the reference to
      // alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      setAlreadyRemoved([...alreadyRemoved, toBeRemoved]);
      childRefs[index].current.swipe(dir); // Swipe the card!
      
    }
  };

  // const swipe = (dir) => {

  //   if (peopleOptions.length) {
  //     // const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
  //     const index = peopleOptions.length-1; // Find the index of which to make the reference to
  //     // alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
  //     // setAlreadyRemoved([...alreadyRemoved,toBeRemoved]);

  //     childRefs[index].current.swipe(dir) // Swipe the card!
  //     let clonePeopleOptions=[...peopleOptions];
  //     clonePeopleOptions.pop();
  //     setPeopleOptions(clonePeopleOptions);
  //   }
  // }

  return (
    <div className="swipe-buttons">
      <IconButton className="swipe-buttons-repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-left" onClick={() => swipe("left")}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-star" onClick={() => swipe("up")}>
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton
        className="swipe-buttons-right"
        onClick={() => swipe("right")}
      >
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
