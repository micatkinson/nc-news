import Sort from "./Sort"
import ArticleList from "./ArticleList"
import { useEffect, useState } from "react"
import { getArticles } from "./api"
import Loading from "./Loading";
import Error from "./Error";


export default function Home({articles, setArticles}){

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getArticles().then((articleData) => {
            setArticles(articleData)
            setIsLoading(false)
        }).catch((error) => {
            setError(error)
            setIsLoading(false)
        })
    });


    if (isLoading) return <Loading />
    if (error !== null) return <Error error={error}/>

    return (
        <main className='homeMain'>
            <h2>Articles</h2>
            <Sort />
            <ArticleList articles={articles} setArticles={setArticles}/>
        </main>
    )
}