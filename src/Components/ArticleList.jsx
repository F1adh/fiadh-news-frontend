import { useEffect, useState } from "react"
import { Card, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";

function ArticleList(){
    const [articlesList, setArticlesList] = useState([]);
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const fetchArticles = () =>{
        const apiPath = 'https://fiadh-nc-news.onrender.com/api/articles'
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        }

        fetch(apiPath, requestOptions)
        .then((response)=>response.json())
        .then(({articles})=>{
            setArticlesList(articles)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchArticles();
    },[])

   

    return(
        <main className="article-list">
            {
                articlesList.map((articleItem, index)=>{
                    return(
                        <article key={index} className="news-article-card">
                            <h2>{articleItem.title}</h2>
                            <h3>{articleItem.author}, posted {Date(articleItem.created_at)}</h3>
                            <h4>topic: {articleItem.topic} votes:{articleItem.votes}</h4>
                            <Link to={`/article-list/${articleItem.article_id}`}>
                            <button>Read Article</button>
                            </Link>
                            <img src={articleItem.article_img_url}></img>
                            
                            
                        </article>
                    )
                })
            }
        </main>
    )
}

export default ArticleList