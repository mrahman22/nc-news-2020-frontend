import React, { Component } from "react";
import { fetchUser } from "./api";
class GetSingleUser extends Component {
  state = {
    singleUser: {},
    isLoading: true
  };

  componentDidMount() {
    fetchUser(this.props.username).then(res => {
      this.setState({ singleUser: res.data.user, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) return "...loading";
    const { username, avatar_url, name } = this.state.singleUser;
    return (
      <div className="user">
        <h1>{username}</h1>
        <ul>
          <li>{avatar_url}</li>
          <li>{name}</li>
        </ul>
        {/* <p>{avatar_url}</p> */}
      </div>
    );
  }
}

export default GetSingleUser;
