import React from "react";
import "./style.css";

export default function Strip() {
  return (
    <div className="strip app-color">
      <div className="row">
        <ul className="flex">
          <li className="list">Top Up</li>
          <li className="list">Airlines</li>
          <li className="list">Internet Bills</li>
          <li className="list">Load Funds</li>
        </ul>
      </div>
    </div>
  );
}
