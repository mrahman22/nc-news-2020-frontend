import React, { Component } from "react";
import {
  fetchArticleByComments,
  sortUserByQuery,
  postNewComment,
  DeleteCommment
} from "./api";
import SortComments from "./SortComments";
import PostNewCommForm from "./PostNewCommForm";

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
    // this should... if value is votes:

    /*
     Something thats changing -> like the value
     In turn you want that do change something else

     Direct Effect -> choosing that option (value)
     Indirect Effect -> rerender with.... comments sorted
    

     Handlesort is just going to deal with the choosing of the option -> 
        put the value in state


      When do we use CDU?
        if newstate/props (something has change) -> action that change by making your request
    */

    const article_id = this.props.article_id;
    sortUserByQuery(article_id, value).then(({ data }) => {
      this.setState({
        comments: data.comments,
        isLoading: false
      });
    });
  };
  // params -> if you don't pass anything into params -> theres no query
  // reuse your fetchArticleByComments

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

  postComments = newComment => {
    const article_id = this.props.article_id;
    postNewComment(article_id, newComment).then(res => {
      this.setState(currentState => {
        return { comments: [res.data.comment, ...currentState.comments] };
      });
    });
  };

  handleDelete = comment_id => {
    DeleteCommment(comment_id);
    this.setState(currentState => {
      return {
        comments: currentState.comments.filter(
          comment => comment.comment_id !== comment_id
        )
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
        <br />
        <PostNewCommForm postComments={this.postComments} />
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
                <button onClick={e => this.handleDelete(comment.comment_id)}>
                  Delete Comment
                </button>
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
