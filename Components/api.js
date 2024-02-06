import axios from "axios";
import ArticleList from "./ArticleList";

const ncNews = axios.create({ baseURL: 'https://first-web-service-wn9h.onrender.com/api' })

export const getArticles = () => {
    return ncNews.get("/articles").then(({ data }) => {
        return data.articles;
    })
}

export const getArticlesById = (article_id) => {
    return ncNews.get(`/articles/${article_id}`).then(({ data }) => {
        return [data.article];
    })
}
