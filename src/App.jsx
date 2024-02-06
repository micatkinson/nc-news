import { Routes, Route } from 'react-router-dom';
import Nav from '../Components/Nav'
import Home from '../Components/Home'
import './App.css'
import SelectArticle from '../Components/SelectArticle'
import { useState, useEffect } from "react"
import { getArticles } from "../Components/api"

function App() {

  const [articles, setArticles] = useState([])
  useEffect(() =>  {
      getArticles().then((articleData) => {
          setArticles(articleData);
      });
}, [])

  return (
    <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home articles={articles} setArticles={setArticles}/>} />
          <Route path="/articles/:article_id" element={<SelectArticle articles={articles} setArticles={setArticles} />} />
        </Routes>
      </>
  )

}
   
export default App
