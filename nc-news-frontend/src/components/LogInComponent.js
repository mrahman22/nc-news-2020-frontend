import React from "react";

const LogInComponent = props => {
  return (
    <form className="login" onSubmit={props.handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          id="username"
          value={props.state.username}
          onChange={e => {
            props.handleInput("username", e.target.value);
          }}
        ></input>
        <button>Log in</button>
      </label>
    </form>
  );
};

export default LogInComponent;
