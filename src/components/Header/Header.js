import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./header.css";
import { Link, useHistory } from "react-router-dom";

const Header = ({ backButton, alreadyRemoved, setAlreadyRemoved }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton
          onClick={() => history.replace(backButton)}
          className="header-icon-button"
        >
          <ArrowBackIosIcon fontSize="large" className="header-icons" />
        </IconButton>
      ) : (
        <IconButton className="header-icon-button">
          <PersonIcon className="header-icons" fontSize="large" />
        </IconButton>
      )}

      <Link to="/" onClick={() =>{ setAlreadyRemoved([])}}>
        <img
          className="header-logo"
          src="https://www.thelogocreative.co.uk/wp-content/uploads/2017/09/Screen-Shot-2017-08-17-at-10.04.531.png"
          alt="tinder-logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton className="header-icon-button">
          <ForumIcon className="header-icons" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
