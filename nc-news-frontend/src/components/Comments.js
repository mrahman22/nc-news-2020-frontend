import React, { Component } from "react";
import { fetchArticleByComments, sortUserByQuery } from "./api";
import SortComments from "./SortComments";

class Comments extends Component {
  state = {
    comments: {},
    isLoading: true,
    sort: ""
  };

  componentDidMount() {
    const article_id = this.props.article_id;
    fetchArticleByComments(article_id).then(({ data }) => {
      this.setState({
        comments: data.comments,
        isLoading: false,
        sort: ""
      });
    });
  }

  handleSort = value => {
    const article_id = this.props.article_id;
    sortUserByQuery(article_id, value).then(({ data }) => {
      this.setState({
        comments: data.comments,
        isLoading: false,
        sort: value
      });
    });
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.sort !== this.state.sort) {
      const article_id = this.props.article_id;
      this.handleSort = value => {
        sortUserByQuery(article_id, value).then(({ data }) => {
          this.setState({
            comments: data.comments,
            isLoading: false,
            sort: value
          });
        });
      };
    }
  }

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
