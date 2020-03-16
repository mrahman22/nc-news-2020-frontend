import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Articles from "./components/Articles";
function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Home path="/" />
        <Articles path="/articles" />
      </Router>
    </div>
  );
}

export default App;
