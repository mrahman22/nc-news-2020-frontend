import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
        <Articles path="/articles" />
        <SingleArticle path="articles/:article_id" />
        <Topics path="/topics" />
      </Router>
    </div>
  );
}

export default App;
