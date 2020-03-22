import React, { Component } from "react";
import { fetchArticlesById } from "./api";
import { patchCommentVotes } from "./api";

class SingleArticle extends Component {
  state = {
    selectedArticle: {},
    isLoading: true
  };

  componentDidMount() {
    fetchArticlesById(this.props.article_id).then(({ data }) => {
      this.setState({ selectedArticle: data.article, isLoading: false });
    });
  }

  incrementVotes = e => {
    const article_id = this.props.article_id;
    patchCommentVotes(article_id, 1).then(({ data }) => {
      this.setState({ selectedArticle: data.article, isLoading: false });
    });
  };
  decrementVotes = e => {
    const article_id = this.props.article_id;
    patchCommentVotes(article_id, -1).then(({ data }) => {
      this.setState({ selectedArticle: data.article, isLoading: false });
    });
  };

  render() {
    const { selectedArticle } = this.state;
    if (this.state.isLoading) return "....Loading";
    return (
      <div>
        <h2>Title: {selectedArticle.title}</h2>
        <p>Author: {selectedArticle.author}</p>
        <p>Topic: {selectedArticle.topic}</p>
        <p>Created_at{selectedArticle.created_at}</p>
        <p>Body: {selectedArticle.body}</p>
        <p>Comment Count: {selectedArticle.comment_count}</p>
        <p>Votes: {selectedArticle.votes}</p>
        <button onClick={this.incrementVotes}>LIKE</button>
        <button onClick={this.decrementVotes}>DISLIKE</button>
      </div>
    );
  }
}

export default SingleArticle;
