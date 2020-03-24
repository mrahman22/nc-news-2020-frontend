import React, { Component } from "react";
import LoginComponent from "./LogInComponent";

class LoginForm extends Component {
  state = {
    users: [
      "jessjelly",
      "tickle122",
      "weegembump",
      "cooljmessy",
      "grumpy19",
      "happyamy2016"
    ],
    loggedIn: null,
    loggedOut: false,
    validUser: false
  };

  handleInput = (key, username) => {
    this.setState({ [key]: username });
  };

  handleSubmit = e => {
    const username = this.state.username;
    e.preventDefault();
    this.loginUser(username);
    this.setState({ username: "" });
  };

  loginUser(username) {
    if (this.state.users.includes(username)) {
      this.setState({ loggedIn: username, validUser: true, loggedOut: false });
    }
  }

  handleLogout = () => {
    this.setState({ loggedIn: null, loggedOut: true });
  };

  render() {
    return (
      <div className="login">
        <LoginComponent
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
        {this.state.loggedIn !== null ? (
          <p className="green">Logged in as {this.state.loggedIn}</p>
        ) : (
          <p className="red">currently not logged in</p>
        )}
        <p>You must be logged in to post or delete a comment</p>
        <p>Please see list of valid users below</p>
        <ul>
          <li>tickle122</li>
          <li>weegembump</li>
          <li>cooljmessy</li>
          <li>happyamy2016</li>
          <li>grumpy19</li>
          <li>jessjelly</li>
        </ul>
        {this.state.loggedOut ? (
          <p className="green">You have been logged out!</p>
        ) : (
          <p>""</p>
        )}
        <button onClick={this.handleLogout}>Log out</button>
      </div>
    );
  }
}

export default LoginForm;
