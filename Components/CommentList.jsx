import CommentForm from './CommentForm';
import ShowButton from './ShowCommentsButton';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import { getComments } from './api';
import Loading from './Loading';
import Error from './Error';

export default function CommentList({article}){
    const [comments, setComments] = useState([])
    const selected = article[0]
    const id = selected.article_id
    const count = Number(selected.comment_count)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [commentCount, setCommentCount] = useState(count)


    useEffect(() => {
        getComments(id)
        .then((commentData) => {
            setComments(commentData)
            setIsLoading(false)
    }).catch((error) => {
        setIsLoading(false)
        setError(error)
    });
}, [comments])


    const addComment = (newComment) => {
        setComments((currentComments) => [...currentComments, newComment])
    }

    const removeComment = (idToRemove) => {
        setComments((currentComments) => [...currentComments.filter((comment) => comment.id !== idToRemove)])
    }


    if (isLoading) return <Loading />
    if (error !== null) return <Error error={error}/>

    return (
    <section className='comments'>
        <h2>{commentCount} Comments</h2>
        <CommentForm id={id} setCommentCount={setCommentCount} setComments={setComments} addComment={addComment} removeComment={removeComment}/>
        <ShowButton title='comments'>
        <ul>
            {comments.map((comment, index) => (
                <CommentCard key={[comment.id, index]} comment={comment} index={index} className='commentStack' removeComment={removeComment} setCommentCount={setCommentCount}/>
            ))}
        </ul>
        </ShowButton>
    </section>
    )
}

