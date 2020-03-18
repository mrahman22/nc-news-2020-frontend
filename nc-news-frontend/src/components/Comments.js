import React, { Component } from "react";
import { fetchArticleByComments } from "./api";
import SortComments from "./SortComments";

class Comments extends Component {
  state = {
    comments: {},
    isLoading: true
  };

  componentDidMount() {
    const article_id = this.props.article_id;
    fetchArticleByComments(article_id).then(({ data }) => {
      this.setState({ comments: data.comments, isLoading: false });
    });
  }

  handleSort = value => {
    this.setState(currentState => {
      return {
        comments: currentState.comments.sort(function(a, b) {
          if (value === "author") {
            if (a[value] < b[value]) {
              return -1;
            }
            if (a[value] > b[value]) {
              return 1;
            }
            return 0;
          }
          if (value === "votes") {
            return a[value] - b[value];
          }
          return 0;
        })
      };
    });
  };

  render() {
    const { comments, isLoading } = this.state;

    if (isLoading) return "...Loading";
    return (
      <div>
        <br />
        <SortComments handleSort={this.handleSort} />
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <br />
                <h3>username: {comment.author}</h3>
                <p>comment_id: {comment.comment_id}</p>
                <p>article_id: {comment.article_id}</p>
                <p>created_at: {comment.created_at}</p>
                <p>body: {comment.body}</p>
                <p>votes: {comment.votes}</p>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Comments;
