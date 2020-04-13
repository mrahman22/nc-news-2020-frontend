import React, { Component } from "react";
import { fetchArticlesByTopics } from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@reach/router";

class ArticlesByTopics extends Component {
  state = {
    articles: {},
    isLoading: true,
    hasError: false,
  };

  componentDidMount() {
    const topic = this.props.type;
    fetchArticlesByTopics(topic)
      .then(({ data }) => {
        this.setState({ articles: data.articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          hasError: { msg: err.response.data.msg, status: err.response.status },
          isLoading: false,
        });
      });
  }
  render() {
    if (this.state.isLoading) return ".....Loading";
    if (this.state.hasError) return "Status: 404, msg: Topic does not exist";
    return (
      <div className="articlesBy-topics">
        <ul>
          {this.state.articles.map((article) => {
            return (
              <li className="articles" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <span>
                    <h5 className="topics-header">
                      {article.title}
                      <br />
                      <br />
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </h5>
                  </span>
                </Link>
                <span>
                  <p className="art-btn">user: {article.author}</p>
                </span>

                <p>Topic: {article.topic}</p>
                <p>Created_at: {article.created_at}</p>
                <p>Votes: {article.votes}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlesByTopics;
