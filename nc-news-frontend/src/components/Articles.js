import React from "react";
import { fetchArticles } from "./api";
import { Link } from "@reach/router";

class Articles extends React.Component {
  state = {
    articles: {},
    isLoading: true
  };

  componentDidMount() {
    fetchArticles().then(({ data }) => {
      this.setState({ articles: data.articles, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) return "....loading";

    return (
      <div>
        <h1>Articles</h1>
        <ul>
          {this.state.articles.map(article => {
            return (
              <li key={article.article_id}>
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
                <Link to={`${article.article_id}/comments`}>
                  <p>Comment_Count: {article.comment_count}</p>
                </Link>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
