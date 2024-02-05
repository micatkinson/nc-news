import axios from "axios";

const ncNews = axios.create({ baseURL: 'https://first-web-service-wn9h.onrender.com/api' })

export const getArticles = () => {
    return ncNews.get("/articles").then(({ data }) => {
        return data.articles;
    })
}

