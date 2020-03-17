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
      <div>
        <h1>{username}</h1>
        <p>{avatar_url}</p>
        <p>{name}</p>
      </div>
    );
  }
}

export default GetSingleUser;
