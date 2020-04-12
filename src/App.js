import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Header from "./components/Header";
import Comments from "./components/Comments";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
// import GetSingleUser from "./components/GetSingleUser";
import LoginForm from "./components/LoginForm";
import ErrorPage from "./components/ErrorPage";
import ArticlesByTopics from "./components/ArticlesByTopics";

class App extends React.Component {
  state = {
    users: [
      "jessjelly",
      "tickle122",
      "weegembump",
      "cooljmessy",
      "grumpy19",
      "happyamy2016",
    ],
    loggedInUser: null,
    validUser: false,
    isLoggedin: false,
  };

  handleLogin = (username) => {
    if (this.state.users.includes(username)) {
      this.setState({
        loggedInUser: username,
        validUser: true,
        isLoggedin: true,
      });
    }
  };

  handleLogout = () => {
    this.setState({
      loggedInUser: null,
      validUser: false,
      isLoggedin: false,
    });
  };

  render() {
    return (
      <div className="App">
        <span>
          <Header loggedInUser={this.state.loggedInUser} />
        </span>
        <Router>
          <LoginForm
            path="/login"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            loggedInUser={this.state.loggedInUser}
          />
          <Home path="/" />
          <Articles path="/articles" />
          <SingleArticle path="articles/:article_id/" />
          {/* <GetSingleUser path="/users/:username" /> */}
          <Comments
            path="/articles/:article_id/comments"
            loggedInUser={this.state.loggedInUser}
          />
          <ArticlesByTopics path="/topics/:type" />
          <ErrorPage default status={404} msg={"Page not found"} />
        </Router>
      </div>
    );
  }
}

export default App;
