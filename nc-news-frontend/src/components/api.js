import axios from "axios";

export const fetchArticles = () => {
  return axios.get("https://nc2020server.herokuapp.com/api/articles");
};

export const fetchArticlesById = article_id => {
  return axios.get(
    `https://nc2020server.herokuapp.com/api/articles/${article_id}`
  );
};

export const fetchTopics = () => {
  return axios.get("https://nc2020server.herokuapp.com/api/topics");
};
