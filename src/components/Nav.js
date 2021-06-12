import React from "react";
import "../styles/Nav.css";

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav_container">
        <img
          className="nav_logo"
          src="https://deadline.com/wp-content/uploads/2020/07/netflix-logo.png"
          alt=""
        ></img>
        <img
          className="nav_avater"
          src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Nav;
