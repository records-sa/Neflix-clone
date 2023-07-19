import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "8734fc709d64dfb44b9633fadef5c6ed",
    language: "ko-KR",
  },
});

export default instance;
