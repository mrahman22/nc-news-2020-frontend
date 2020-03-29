import React from "react";
import { fetchArticles } from "./api";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import SortArticles from "./SortArticles";

class Articles extends React.Component {
  state = {
    articles: {},
    isLoading: true,
    hasError: false,
    sort: ""
  };

  componentDidMount() {
    fetchArticles().then(({ data }) => {
      this.setState({ articles: data.articles, isLoading: false, sort: "" });
    });
  }

  handleSort = value => {
    this.setState({ sort: value });
  };

  componentDidUpdate(prevProp, prevState) {
    const value = this.state.sort;
    if (prevState.sort !== this.state.sort) {
      fetchArticles(value).then(({ data }) => {
        this.setState({
          articles: data.articles,
          isLoading: false,
          sort: value
        });
      });
    }
  }

  render() {
    if (this.state.isLoading) return "....loading";

    return (
      <div className="main-articles">
        <h1 className="sub-header">Articles</h1>
        <SortArticles handleSort={this.handleSort} />
        <ul>
          {this.state.articles.map(article => {
            return (
              <li className="articles" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <span>
                    <h5 className="article-title">
                      {article.title} <br />
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </h5>
                  </span>
                </Link>
                <span>
                  <Link to={`/users/${article.author}`}>
                    <button className="art-btn">user: {article.author}</button>
                  </Link>
                </span>

                <p>Topic: {article.topic}</p>
                <p>Created_at: {article.created_at}</p>
                <p>Votes: {article.votes}</p>
                <Link to={`${article.article_id}/comments`}>
                  <p>Comment_Count: {article.comment_count}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
