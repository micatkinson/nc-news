import Sort from "./Sort"
import ArticleList from "./ArticleList"
import { useEffect } from "react"
import { getArticles } from "./api"


export default function Home({articles, setArticles}){

    useEffect(() => {
        getArticles().then((articleData) => {
            setArticles(articleData)
        })
    });


    return (
        <main>
            <Sort />
            <ArticleList articles={articles} setArticles={setArticles}/>
        </main>
    )
}