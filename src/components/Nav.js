import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      <Link to="/articles">
        <button className="btn">Articles</button>
      </Link>
      <Link to="/topics">
        <button className="btn">Topics</button>
      </Link>
      <Link to="/login">
        <button className="btn">Login</button>
      </Link>
    </nav>
  );
};

export default Nav;
