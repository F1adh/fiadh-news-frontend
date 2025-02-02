import axios from 'axios'

export const submitComment = (article_id, comment) =>{
    return axios.post(`https://fiadh-nc-news.onrender.com/api/articles/${article_id}/comments`, {username: "cooljmessy", body: comment})
}