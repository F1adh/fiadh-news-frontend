import { useEffect, useState } from "react"
import { Card, CardHeader } from "@mui/material";

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
            console.log(articles)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchArticles();
    },[])

    return(
        <main class="article-list">
            {
                articlesList.map((articleItem, index)=>{
                    return(
                        <article key={index} className="news-article-card">
                            <h2>{articleItem.title}</h2>
                            <h3>{articleItem.author}, posted {Date(articleItem.created_at)}</h3>
                            <h4>topic: {articleItem.topic} votes:{articleItem.votes}</h4>
                            <img src={articleItem.article_img_url}></img>
                            
                        </article>
                    )
                })
            }
        </main>
    )
}

export default ArticleList