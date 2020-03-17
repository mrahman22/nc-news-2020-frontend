import React, { Component } from "react";
import { fetchArticlesById } from "./api";

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

  render() {
    const { selectedArticle } = this.state;
    if (this.state.isLoading) return "....Loading";
    return (
      <div>
        <h2>{selectedArticle.title}</h2>
        <p>{selectedArticle.author}</p>
        <p>{selectedArticle.topic}</p>
        <p>{selectedArticle.created_at}</p>
        <p>{selectedArticle.body}</p>
        <p>{selectedArticle.votes}</p>
        <p>{selectedArticle.comment_count}</p>
      </div>
    );
  }
}

export default SingleArticle;
