import axios from 'axios'


export const updateVoteTotal = (article_id, voteValue) =>{
    return axios.patch(`https://fiadh-nc-news.onrender.com/api/articles/${article_id}`, {inc_votes: voteValue})
}