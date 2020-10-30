import React from "react";
import './style.css';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function MenuCard({title}) {
  return (
    <>
      <div className="menu-wrapper">
        <span className="side-text">{title}</span>
        <ChevronRightIcon />
      </div>
    </>
  );
}
