import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2> Clever programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Jonathan Francois
          </h3>
        </div>
        <CreateIcon />
      </div>
    </div>
  );
}

export default SideBar;
