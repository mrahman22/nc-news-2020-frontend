import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Header from "./components/Header";
import Comments from "./components/Comments";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import GetSingleUser from "./components/GetSingleUser";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
        <Articles path="/articles" />
        <SingleArticle path="articles/:article_id/" />
        <Topics path="/topics" />
        <GetSingleUser path="/users/:username" />
        <Comments path="/articles/:article_id/comments" />
      </Router>
    </div>
  );
}

export default App;
