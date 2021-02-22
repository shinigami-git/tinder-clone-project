import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <IconButton className="header-icon-button" >
        <PersonIcon className="header-icons" fontSize="large" />
      </IconButton>
      <img
        className="header-logo"
        src="https://www.thelogocreative.co.uk/wp-content/uploads/2017/09/Screen-Shot-2017-08-17-at-10.04.531.png"
        alt="tinder-logo"
      />
      <IconButton className="header-icon-button">
        <ForumIcon className="header-icons" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
