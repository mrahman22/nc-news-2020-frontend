import React, { Component } from "react";
import { fetchArticlesById } from "./api";
import { patchCommentVotes } from "./api";
import { Link } from "@reach/router";

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
      <div className="single">
        <h2>
          <span className="red">Title:</span> {selectedArticle.title}
        </h2>
        <p>
          <span className="red">Author:</span> {selectedArticle.author}
        </p>
        <p>
          <span className="red">Topic:</span> {selectedArticle.topic}
        </p>
        <p>
          <span className="red">Created_at</span> {selectedArticle.created_at}
        </p>
        <p>
          <span className="red">Body:</span> {selectedArticle.body}
        </p>
        <Link to={`/articles/${selectedArticle.article_id}/comments`}>
          <p>Comment Count: {selectedArticle.comment_count}</p>
        </Link>
        <p>Votes: {selectedArticle.votes}</p>
        <button onClick={this.incrementVotes}>LIKE</button>
        <button onClick={this.decrementVotes}>DISLIKE</button>
      </div>
    );
  }
}

export default SingleArticle;
