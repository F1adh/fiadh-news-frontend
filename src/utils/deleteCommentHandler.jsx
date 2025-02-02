import axios from 'axios'

export const deleteCommentHandler = (comment_id)=>{
    return axios.delete(`https://fiadh-nc-news.onrender.com/api/comments/${comment_id}`)
}