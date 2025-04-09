import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ArticleList from "./Components/ArticleList";
import Article from "./Components/Article";
import Home from "./Components/Home";
import Topics from "./Components/Topics";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article-list" element={<ArticleList />} />
        <Route path="/article-list/:article_id" element={<Article />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
