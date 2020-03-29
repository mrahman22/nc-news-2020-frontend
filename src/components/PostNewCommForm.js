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
      <form className="comment-container" onSubmit={this.handleSubmit}>
        <input
          type="textarea"
          id="body"
          className="comment"
          value={this.state.body}
          required
          onChange={e => this.handleInput(e.target.value, "body")}
        ></input>
        <br />
        <br />
        <label>POST NEW COMMENT</label>
        <br />
        <button className="comment-btn">POST</button>
      </form>
    );
  }
}

export default PostNewCommForm;
