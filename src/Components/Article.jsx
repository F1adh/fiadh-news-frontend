import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ThreeDots } from 'react-loader-spinner';


function Article(){
    const { article_id } = useParams()
    const [articleData, setArticleData] = useState(null);
    
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const getArticleData = () =>{
        const apiPath = `https://fiadh-nc-news.onrender.com/api/articles/${article_id}`
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        }

        fetch(apiPath, requestOptions)
        .then((response)=>response.json())
        .then(({articles})=>{
            setArticleData(articles[0])
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const dateOptions={ weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit' }

    useEffect(()=>{
        getArticleData()
    }, [article_id])

    return(
        <main>
            {
                articleData?(
                    
                    <article className="article-item">
                        <h2>{articleData.title}</h2>
                <h3>Topic: {articleData.topic}  Author: {articleData.author}</h3>
                <h4>
                    posted: {new Date(articleData.created_at).toLocaleString('en-GB', dateOptions)}  
      
                    Votes: {articleData.votes}
                </h4>
                <img src={articleData.article_img_url}></img>
                <p>{articleData.body}</p>
                    </article>
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