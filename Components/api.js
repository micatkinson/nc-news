import axios from "axios";

const ncNews = axios.create({ baseURL: 'https://first-web-service-wn9h.onrender.com/api' })

export const getArticles = (selectedValue = 'created_at', order = 'desc') => {
    return ncNews.get(`/articles?sort_by=${selectedValue}&order=${order}`).then(({ data }) => {
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
        return data.addedComment
    })
}

export const getUsers = () => {
    return ncNews.get('/users').then(({ data }) => {
        return data.users
    })
}

export const deleteComment = (comment_id) => {
    return ncNews.delete(`/comments/${comment_id}`).then(({ response }) => {
    })
}

export const getTopics = () => {
    return ncNews.get('/topics').then(({ data }) => {
        return data.topics
    })
}

export const getTopic = (topic) => {
    return ncNews.get(`/articles?topic=${topic}`).then(({ data }) => {
        return data.articles
    })
}

