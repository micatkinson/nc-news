import CommentList from "./CommentList";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { getArticlesById } from "./api";
import ArticleList from "./ArticleList";
import { useState } from "react";

export default function SelectArticle({articles, setArticles}){

    const { article_id } = useParams();

    const [comments, setComments] = useState([])

    useEffect(() =>  {
        getArticlesById(article_id).then((articleData) => {
            setArticles(articleData);
        });
  }, [])

    return (
        <>
        <ArticleList articles={articles} setArticles={{setArticles}}/>
        <CommentList />
        </>
    )

}