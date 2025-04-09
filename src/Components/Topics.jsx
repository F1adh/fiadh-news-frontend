import { useEffect, useState } from "react";
import { fetchArticleList, getTopics } from "../utils/apiHandler";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

function Topics() {
  const [topicsList, setTopicsList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("coding");
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    getTopics()
      .then(({ topics }) => {
        setTopicsList(topics);
      })
      .catch((err) => {
        console.log(err);
      });

    fetchArticleList()
      .then(({ articles }) => {
        setArticlesList(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayTopic = (e) => {
    e.preventDefault();
    setSelectedTopic(e.target.value);
  };

  const filteredArticles = articlesList.filter(article => article.topic === selectedTopic);

  return (
    <>
      <h1>Topics</h1>
      {topicsList ? (
        <select onClick={displayTopic}>
          {topicsList.map((topic, index) => {
            return (
              <option key={index} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
      ) : (
        <h3>
          {" "}
          <ThreeDots
            visible={true}
            height="40"
            width="40"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </h3>
      )}

      {selectedTopic ? (
        <main className="article-list">
          {filteredArticles.map((articleItem, index) => {
            return (
              <article key={index} className="news-article-card">
                <h2>{articleItem.title}</h2>
                <h3>
                  {articleItem.author}, posted {Date(articleItem.created_at)}
                </h3>
                <h4>
                  topic: {articleItem.topic} votes:{articleItem.votes}
                </h4>
                <Link to={`/article-list/${articleItem.article_id}`}>
                  <button>Read Article</button>
                </Link>
                <img src={articleItem.article_img_url}></img>
              </article>
            );
          })}
        </main>
      ) : (
        <h3>
          {" "}
          <ThreeDots
            visible={true}
            height="40"
            width="40"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </h3>
      )}
    </>
  );
}

export default Topics;
