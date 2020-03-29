import React, { Component } from "react";

class LogInForm extends Component {
  state = {
    username: "",
    loggedOut: false
  };

  handleInput = (field, input) => {
    this.setState({ [field]: input });
  };

  handleSubmit = event => {
    const { username } = this.state;
    event.preventDefault();
    this.props.handleLogin(username);
    this.setState({ username: "" });
  };

  clickLogout = () => {
    this.setState({ loggedOut: true });
  };

  render() {
    const loggedInUser = this.props.loggedInUser;
    return (
      <div className="login">
        <p>You must be logged in to post or delete a comment</p>
        <input
          type="text"
          value={this.state.username}
          onChange={e => {
            this.handleInput("username", e.target.value);
          }}
        />
        <button className="login-btn" onClick={this.handleSubmit}>
          Log in
        </button>
        <p>Please see list of valid users below</p>
        <ul>
          <li>tickle122</li>
          <li>weegembump</li>
          <li>cooljmessy</li>
          <li>happyamy2016</li>
          <li>grumpy19</li>
          <li>jessjelly</li>
        </ul>
        {loggedInUser !== null ? (
          <p className="green">Logged in as {loggedInUser}</p>
        ) : (
          <p className="red">currently not logged in</p>
        )}
      </div>
    );
  }
}

export default LogInForm;
