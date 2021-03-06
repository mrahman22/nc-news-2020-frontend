import React, { Component } from "react";
import {
  fetchArticleByComments,
  postNewComment,
  DeleteCommment,
  fetchArticlesById,
  //fetchArticles,
} from "./api";
import SortComments from "./SortComments";
import PostNewCommForm from "./PostNewCommForm";

class Comments extends Component {
  state = {
    selectedArticle: [],
    comments: {},
    isLoading: true,
    sort: "",
    hasError: false,
  };

  getSingleArticle = () => {
    fetchArticlesById(this.props.article_id).then(({ data }) => {
      this.setState({ selectedArticle: data.article, isLoading: false });
    });
  };

  componentDidMount() {
    const article_id = this.props.article_id;
    fetchArticleByComments(article_id)
      .then(({ data }) => {
        this.setState({
          comments: data.comments,
          isLoading: false,
          sort: "",
          hasError: false,
        });
      })
      .catch((err) => {
        this.setState({
          hasError: { msg: err.response.data.msg, status: err.response.status },
          isLoading: false,
        });
      });
  }

  handleSort = (value) => {
    this.setState({ sort: value });
  };

  componentDidUpdate(prevProp, prevState) {
    const value = this.state.sort;
    const article_id = this.props.article_id;
    if (prevState.sort !== this.state.sort) {
      fetchArticleByComments(article_id, value).then(({ data }) => {
        this.setState({
          comments: data.comments,
          isLoading: false,
          sort: value,
        });
      });
    }
  }

  postComments = (newComment) => {
    const loggedInUser = this.props.loggedInUser;
    newComment.username = loggedInUser;
    const article_id = this.props.article_id;
    postNewComment(article_id, newComment).then((res) => {
      this.setState((currentState) => {
        return { comments: [res.data.comment, ...currentState.comments] };
      });
    });
  };

  handleDelete = (comment_id) => {
    DeleteCommment(comment_id);
    this.setState((currentState) => {
      return {
        comments: currentState.comments.filter(
          (comment) => comment.comment_id !== comment_id
        ),
      };
    });
  };

  render() {
    const loggedInUser = this.props.loggedInUser;
    const { comments, isLoading } = this.state;

    if (isLoading) return "...Loading";
    if (this.state.hasError)
      return "Status: 404, msg: article_id does not exist";
    return (
      <section className="all-comments">
        <br />
        <SortComments handleSort={this.handleSort} />
        <br />
        {loggedInUser && <PostNewCommForm postComments={this.postComments} />}
        <p className="comments-msg">
          YOU MUST BE LOGGED IN TO POST OR DELETE A COMMENT
        </p>
        <ul>
          {comments.map((comment) => {
            return (
              <li className="list-comments" key={comment.comment_id}>
                <br />
                <h3 className="comment-title">username: {comment.author}</h3>
                <p>comment_id: {comment.comment_id}</p>
                <p>article_id: {comment.article_id}</p>
                <p>created_at: {comment.created_at}</p>
                <p>body: {comment.body}</p>
                <p>votes: {comment.votes}</p>

                {loggedInUser === comment.author && (
                  <button
                    className="comment-btn"
                    onClick={(e) => this.handleDelete(comment.comment_id)}
                  >
                    Delete Comment
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Comments;
