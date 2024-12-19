const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

export const fetchArticleList = ()=>{
    
        
    
        
            const apiPath = 'https://fiadh-nc-news.onrender.com/api/articles'
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            }
    
            return fetch(apiPath, requestOptions)
            .then((response)=>response.json())
            
            
        
}


export const getArticleData = (article_id) =>{
    const apiPath = `https://fiadh-nc-news.onrender.com/api/articles/${article_id}`
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    }

    return fetch(apiPath, requestOptions)
    .then((response)=>response.json())
    
}


export const getArticleComments = (article_id) =>{
    const apiPath = `https://fiadh-nc-news.onrender.com/api/articles/${article_id}/comments`
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    }

    return fetch(apiPath, requestOptions)
    .then((response)=>response.json())
    
}