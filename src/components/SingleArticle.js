import React, { Component } from "react";
import { fetchArticlesById } from "./api";
// import { patchVotes } from "./api";
import { Link } from "@reach/router";
import Voter from "./Voter";

class SingleArticle extends Component {
  state = {
    selectedArticle: {},
    isLoading: true,
    hasError: false,
  };

  componentDidMount() {
    fetchArticlesById(this.props.article_id)
      .then(({ data }) => {
        this.setState({ selectedArticle: data.article, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          hasError: { msg: err.response.data.msg, status: err.response.status },
          isLoading: false,
        });
      });
  }

  addVotes = (updatedArticle) => {
    this.setState({ selectedArticle: updatedArticle });
  };
  render() {
    const { selectedArticle } = this.state;
    if (this.state.isLoading) return "....Loading";
    if (this.state.hasError) return <p>status: 404, msg: Id not found!</p>;
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
        <Voter
          article_id={selectedArticle.article_id}
          addVotes={this.addVotes}
        />
      </div>
    );
  }
}

export default SingleArticle;
