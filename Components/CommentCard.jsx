import Stack from 'react-bootstrap/Stack';
import UserContext from "./UserContext"
import { useContext, useState } from "react"
import { deleteComment } from "./api";
import Error from './Error';


export default function CommentCard({comment, index, removeComment, setCommentCount}){
    const {loggedInUser} = useContext(UserContext)
    const { username } = loggedInUser;
    const [error, setError] = useState(null)

    const handleClick = (e) => {
            e.preventDefault()
            const commentid = comment.comment_id
            deleteComment(commentid)
            .then(() =>{
                setCommentCount((commentCount) => commentCount - 1)
            }).catch((err) => {
                setCommentCount((commentCount) => commentCount + 1)
                setError({
                    status: 408,
                    statusText: 'Unable to delete comment, please retry'})
            })
        }

    if(error) return <Error message={error}/>

    return (
    <Stack gap={3} key={[comment.id, index]} className='commentStack'>
        <div key={[comment.id, 'div']}className="commentItem">
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <li>{new Date(comment.created_at).toLocaleString()}</li>
            <li>Votes: {comment.votes}</li>
            {username === comment.author ? <button className='deleteButton' onClick={handleClick}> Delete </button> : null}
        </div>
    </Stack>
    )   
}