import CommentList from "./CommentList";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getArticlesById, getComments } from "./api";
import ArticleCard from "./ArticleCard";
import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
 

export default function SelectArticle({article}){

    const { article_id } = useParams();
    const [selectedArticle, setSelectedArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>  {
        getArticlesById(article_id).then((articleData) => {
            setSelectedArticle(articleData);
            return getComments(article_id)
            .then((commentData) => {
            setComments(commentData)
            setIsLoading(false)
            })
            .catch((error) => {
                setError(error)
                setIsLoading(false)
            })
        });
  }, [article_id])

  if (isLoading) return <Loading />
  if (error !== null) return <Error error={error}/>

    return (
        <>
        <ArticleCard article={selectedArticle}/>
        <CommentList comments={comments}/>
        </>
    )

}