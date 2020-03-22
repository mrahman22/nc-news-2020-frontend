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

export const fetchUser = username => {
  return axios.get(`https://nc2020server.herokuapp.com/api/users/${username}`);
};

export const fetchArticleByComments = article_id => {
  return axios.get(
    `https://nc2020server.herokuapp.com/api/articles/${article_id}/comments`
  );
};

export const sortUserByQuery = (article_id, value) => {
  return axios.get(
    `https://nc2020server.herokuapp.com/api/articles/${article_id}/comments`,
    {
      params: {
        sort_by: value
      }
    }
  );
};

export const patchCommentVotes = (article_id, inc_votes) => {
  return axios.patch(
    `https://nc2020server.herokuapp.com/api/articles/${article_id}`,
    { inc_votes }
  );
};

export const postNewComment = (article_id, comment) => {
  return axios.post(
    `https://nc2020server.herokuapp.com/api/articles/${article_id}/comments`,
    comment
  );
};
