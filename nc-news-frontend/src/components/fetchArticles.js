import axios from "axios";

const fetchArticles = () => {
  return axios.get("https://nc2020server.herokuapp.com/api/articles");
};

export default fetchArticles;
