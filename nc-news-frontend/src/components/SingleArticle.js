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
    if (this.state.isLoading) return "....Loading";
    return <div>{this.state.selectedArticle.title}</div>;
  }
}

export default SingleArticle;
