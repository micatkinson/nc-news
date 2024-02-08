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

export const postArticleComment = (article_id, body, username) => {

    const data = {
        username,
        body
    }
    return ncNews.post(`/articles/${article_id}/comments`, data).then(({ data }) => {
        return data.comments
    })
}

export const getUsers = () => {
    return ncNews.get('/users').then(({ data }) => {
        return data.users
    })
}

