import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      nav
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
