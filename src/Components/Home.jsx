import Sort from "./Sort"
import ArticleList from "./ArticleList"
import { useEffect, useState } from "react"
import { getArticles } from "./api"
import Loading from "./Loading";
import Error from "./Error";


import { useSearchParams } from "react-router-dom";


export default function Home({articles, setArticles}){

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [order, setOrder] = useState('asc')
    const [selectedValue, setSelectedValue] = useState('created_at')
    const [searchParams, setSearchParams] = useSearchParams()
    
    const setSortOrder = (selectedValue) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('sort_by', selectedValue)
        setSearchParams(newParams)
    }

    useEffect(() => {
        getArticles(selectedValue, order).then((articleData) => {
            setArticles(articleData)
            setIsLoading(false)
        }).catch((error) => {
            setError(error)
            setIsLoading(false)
        })
    }, [selectedValue, order]);

    if (isLoading) return <Loading />
    if (error) return <Error error={error}/>

    return (
        <main className='homeMain'>
            <h1 className='title'>Articles</h1>
            <Sort selectedValue={selectedValue} setSelectedValue={setSelectedValue} order={order} setOrder={setOrder} isLoading={isLoading} setSortOrder={setSortOrder}/>
            <ArticleList articles={articles} setArticles={setArticles}/>
        </main>
    )
}