import axios from "axios";

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

export const getComments = (article_id) => {
    return ncNews.get(`/articles/${article_id}/comments`).then(({ data }) => {
        return data.comments;
    })

}

export const patchArticleVotes = (article_id, newVote) => {
    const data = { inc_votes: newVote }
    return ncNews.patch(`/articles/${article_id}`, data).then(({ data }) => {
        return data.article
    })
}

