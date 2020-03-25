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
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  state = {
    users: [
      "jessjelly",
      "tickle122",
      "weegembump",
      "cooljmessy",
      "grumpy19",
      "happyamy2016"
    ],
    loggedInUser: null,
    validUser: false,
    isLoggedin: false
  };

  handleLogin = username => {
    if (this.state.users.includes(username)) {
      this.setState({
        loggedInUser: username,
        validUser: true,
        isLoggedin: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <span>
          <Header />
          <Nav />
        </span>
        <Router>
          <LoginForm
            path="/login"
            handleLogin={this.handleLogin}
            loggedInUser={this.state.loggedInUser}
          />
          <Home path="/" />
          <Articles path="/articles" />
          <SingleArticle path="articles/:article_id/" />
          <Topics path="/topics" />
          <GetSingleUser path="/users/:username" />
          <Comments
            path="/articles/:article_id/comments"
            loggedInUser={this.state.loggedInUser}
          />
        </Router>
      </div>
    );
  }
}

export default App;
