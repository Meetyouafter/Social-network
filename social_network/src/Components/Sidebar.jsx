/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Message</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Setting</a>
        </div>
      </nav>{" "}
    </div>
  );
};

export default Sidebar;
