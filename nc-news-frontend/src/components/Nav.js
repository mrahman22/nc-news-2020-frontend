import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <button>Home</button>
      </Link>
    </nav>
  );
};

export default Nav;
