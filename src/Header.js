import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <Avatar className="header__avatar" alt="image" />
          <AccessTimeIcon />
        </div>

        <div className="header__search">
          {/* { SEARCHICON }  */}
          {/* { INPUT} */}
        </div>
        <div className="header__right">{/* { HELP ICON} */}</div>
      </div>
    </div>
  );
}

export default Header;
