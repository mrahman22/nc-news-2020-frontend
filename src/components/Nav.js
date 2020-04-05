import React from "react";
import { Link } from "@reach/router";

const Nav = (props) => {
  console.log(props.loggedInUser);

  return (
    <nav className="navbar">
      <Link to="/">
        <h5 className="btn">Home</h5>
      </Link>
      <Link to="/articles">
        <h5 className="btn">Articles</h5>
      </Link>
      {props.loggedInUser !== null ? (
        <Link to="/login">
          <h5 className="btn-unique">{props.loggedInUser}</h5>
        </Link>
      ) : (
        <Link to="/login">
          <h5 className="btn">Login</h5>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
