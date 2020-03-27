import React, { Component } from "react";
import { fetchArticlesByTopics } from "./api";
import { Link } from "@reach/router";

class ArticlesByTopics extends Component {
  state = {
    articles: {},
    isLoading: true
  };

  componentDidMount() {
    const topic = this.props.type;
    fetchArticlesByTopics(topic).then(({ data }) => {
      this.setState({ articles: data.articles, isLoading: false });
    });
  }
  render() {
    if (this.state.isLoading) return ".....Loading";
    return (
      <div>
        <ul>
          {this.state.articles.map(article => {
            return (
              <li className="articles" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <h5>{article.title}</h5>
                </Link>
                <span>
                  <Link to={`/users/${article.author}`}>
                    <button>{article.author}</button>
                  </Link>
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
