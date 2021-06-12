import React, { useEffect, useState } from "react";
import "../styles/Nav.css";

const Nav = (props) => {
  const transtionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transtionNavBar);
    return () => {
      window.removeEventListener("scroll", transtionNavBar);
    };
  });
  const [show, setShow] = useState(false);
  return (
    <div className={`nav  ${show ? "nav_black" : ""}`}>
      <div className="nav_container">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
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
