import axios from "axios";

const baseUrl = "https://nc2020server.herokuapp.com";

export const fetchArticles = (value) => {
  return axios.get(`${baseUrl}/api/articles`, {
    params: {
      sort_by: value,
    },
  });
};

export const fetchArticlesByOrder = (value) => {
  //console.log(value);
  return axios.get(`${baseUrl}/api/articles`, {
    params: {
      order: value,
    },
  });
};

export const fetchArticlesById = (article_id) => {
  return axios.get(`${baseUrl}/api/articles/${article_id}`);
};

export const fetchTopics = () => {
  return axios.get(`${baseUrl}/api/topics`);
};

export const fetchArticlesByTopics = (topic) => {
  return axios.get(`${baseUrl}/api/topics/${topic}`);
};

export const fetchUser = (username) => {
  return axios.get(`${baseUrl}/api/users/${username}`);
};

export const fetchArticleByComments = (article_id, value) => {
  return axios.get(`${baseUrl}/api/articles/${article_id}/comments`, {
    params: {
      sort_by: value,
    },
  });
};

export const patchVotes = (article_id, inc_votes) => {
  return axios.patch(`${baseUrl}/api/articles/${article_id}`, { inc_votes });
};

export const postNewComment = (article_id, comment) => {
  return axios.post(`${baseUrl}/api/articles/${article_id}/comments`, comment);
};

export const DeleteCommment = (comment_id) => {
  return axios.delete(`${baseUrl}/api/comments/${comment_id}`);
};
