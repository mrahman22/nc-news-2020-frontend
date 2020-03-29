import React, { Component } from "react";

class PostNewCommForm extends Component {
  state = {
    body: ""
  };

  handleInput = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postComments(this.state);
    this.setState({ body: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>post new comment</label>
        <input
          type="text"
          id="body"
          value={this.state.body}
          required
          onChange={e => this.handleInput(e.target.value, "body")}
        ></input>
        <button>POST</button>
      </form>
    );
  }
}

export default PostNewCommForm;
