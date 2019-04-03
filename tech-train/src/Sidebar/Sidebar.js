import React from "react";
import "./Sidebar.css";
import { subjects } from "../config/config";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {subjects.map(subject => (
          <li
            key={subject.label}
            className={`menu-item ${
              props.topic === subject.label ? "active" : ""
            }`}
          >
            <div id={subject.label} onClick={props.changeTopic}>
              {subject.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
