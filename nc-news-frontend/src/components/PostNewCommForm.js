import React, { Component } from "react";

class PostNewCommForm extends Component {
  state = {
    username: "",
    body: ""
  };

  handleInput = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postComments(this.state);
    this.setState({ username: "", body: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>username:</label>
        <input
          type="text"
          value={this.state.username}
          id="username"
          onChange={e => this.handleInput(e.target.value, "username")}
        ></input>
        <label>body:</label>
        <input
          type="text"
          id="body"
          value={this.state.body}
          onChange={e => this.handleInput(e.target.value, "body")}
        ></input>
        <button>POST</button>
      </form>
    );
  }
}

export default PostNewCommForm;
