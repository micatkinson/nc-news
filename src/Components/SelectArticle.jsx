import CommentList from "./CommentList";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getArticlesById } from "./api";
import ArticleCard from "./ArticleCard";
import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
 

export default function SelectArticle({article}){

    const { article_id } = useParams();
    const [selectedArticle, setSelectedArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>  {
        getArticlesById(article_id).then((articleData) => {
            setSelectedArticle(articleData);
            setIsLoading(false)
            }).catch((error) => {
                setError(error)
                setIsLoading(false)
        });
  }, [article_id])

  if (isLoading) return <Loading />
  if (error) return <Error error={error}/>

    return (
        <main>
            <div className='individual-container'>
                <ArticleCard article={selectedArticle}/>
            </div>
                <CommentList article={selectedArticle}/>
        </main>
    )

}