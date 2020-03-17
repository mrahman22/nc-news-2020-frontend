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
                <p>{article.author}</p>
                <p>{article.topic}</p>
                <p>{article.created_at}</p>
                <p>{article.votes}</p>
                <p>{article.comment_count}</p>
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
