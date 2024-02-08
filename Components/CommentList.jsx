import CommentForm from './CommentForm';
import ShowButton from './ShowCommentsButton';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';

export default function CommentList({comments, article}){
    const selected = article[0]
    const id = selected.article_id
    const count = Number(selected.comment_count)

    const [commentCount, setCommentCount] = useState(count)

    const [loadedComments, setLoadedComments] = useState(comments)

    useEffect(() => {
        setLoadedComments(comments)
    }, [comments])

    console.log(loadedComments)

    return (
    <section className='comments'>
        <h2>{commentCount} Comments</h2>
        <CommentForm id={id} setCommentCount={setCommentCount} setLoadedComments={setLoadedComments}/>
        <ShowButton title='comments'>
        <ul>
            {loadedComments.map((comment, index) => (
                <CommentCard key={[comment.id, index]} comment={comment} index={index} className='commentStack'/>
            ))}
        </ul>
        </ShowButton>
    </section>
    )
}

