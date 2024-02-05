import { useState, useEffect } from "react"
import { getArticles } from "./api"
import Searchbar from "./Searchbar"
import Sort from "./Sort"
import ArticleCard from "./ArticleCard"


export default function Home(){
    const [articles, setArticles] = useState([])
    useEffect(() =>  {
        getArticles().then((articleData) => {
            setArticles(articleData);
        });
  }, [])

    return (
        <main>
            <Searchbar />
            <Sort />
            <ArticleCard articles={articles}/>
        </main>
    )
}