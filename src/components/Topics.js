import React, { Component } from "react";
import { fetchTopics } from "./api";
import { Link } from "@reach/router";

class Topics extends Component {
  state = {
    topics: {},
    isLoading: true
  };

  componentDidMount() {
    fetchTopics().then(({ data }) => {
      this.setState({ topics: data.topics, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) return "....Loading";
    return (
      <div>
        <ul>
          {this.state.topics.map(topic => {
            return (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>
                  <h2>{topic.slug}</h2>
                </Link>
                <p>{topic.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Topics;