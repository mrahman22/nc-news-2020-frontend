import React from "react";
import Nav from "./Nav";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="row end-sm end-md end-lg middle-sm middle-md middle-lg">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <h1>NC NEWS</h1>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <Nav loggedInUser={props.loggedInUser} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
