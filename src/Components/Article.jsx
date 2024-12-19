import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ThreeDots } from 'react-loader-spinner';
import { getArticleComments, getArticleData } from "../utils/apiHandler";
import { updateVoteTotal } from "../utils/voteHandler";


function Article(){
    const { article_id } = useParams()
    const [articleData, setArticleData] = useState(null);
    const [articleComments, setArticleComments] = useState(null)
    const [articleVotes, setArticleVotes] = useState(0)
   

   

    const dateOptions={ weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit' }

    useEffect(()=>{
        getArticleData(article_id)
        .then(({articles})=>{
            setArticleData(articles[0])
            setArticleVotes(articles[0].votes)
            
        })
        .catch((err)=>{
            console.log(err)
        })

        

        getArticleComments(article_id)
        .then(({comments})=>{
            setArticleComments(comments)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [article_id])

    const handleArticleVote = (voteValue) =>{
        setArticleVotes((currentVotes)=>currentVotes+voteValue)
        updateVoteTotal(article_id, voteValue)
        .catch((err)=>{
            window.alert(`Error: vote not accepted. Error code: ${err}`)
        })
    }

    return(
        <main>
            {
                articleData?(
                    <>
                    <section className="article-item">
                        <h2>{articleData.title}</h2>
                <h3>Topic: {articleData.topic}  Author: {articleData.author}</h3>
                <h4>
                    posted: {new Date(articleData.created_at).toLocaleString('en-GB', dateOptions)}  
      
                    Votes: {articleVotes}
                </h4>
                <img src={articleData.article_img_url}></img>
                <p>{articleData.body}</p>
                <button onClick={() => handleArticleVote(1)}>^</button>
                <button onClick={() => handleArticleVote(-1)}>v</button>
                </section>


               
                {
                    articleComments?(
                        <article className="article-comments">
                            <h2>Comments:</h2>
                            {
                                articleComments.map((comment, index)=>{
                                    return(
                                        <span key={index} className="comment-wrapper"><p><b>{comment.author}</b>: {comment.body} Votes: {comment.votes}</p>
                                        <button>^</button>
                                        </span>
                                    )
                                })
                            }
                        </article>
                    ):(
                        <p>comments loading...</p>
                    )
                }
                    
                </>
                ) :
                ( 
            <article>
                <h3> <ThreeDots
                    visible={true}
                    height="40"
                    width="40"
                    color="#4fa94d"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    /></h3>

            </article>
                
                )
                
            }
        </main>
    )
}

export default Article