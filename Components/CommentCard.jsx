import Stack from 'react-bootstrap/Stack';
import UserContext from "./UserContext"
import { useContext, useState } from "react"
import { deleteComment } from "./api";
import Error from './Error';


export default function CommentCard({comment, index, setCommentCount}){
    const {loggedInUser} = useContext(UserContext)
    const { username } = loggedInUser;
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const handleClick = (e) => {
            e.preventDefault()
            const commentid = comment.comment_id
            deleteComment(commentid)
            .then(() =>{
                setCommentCount((commentCount) => commentCount - 1)
                setIsLoading(false)
            }).catch((error) => {
                setCommentCount((commentCount) => commentCount + 1)
                setError(error)
                setIsLoading(false)
            })
        }


    if(error) return <Error error={error}/>

    return (
    <Stack gap={3} key={[comment.id, index]} className='commentStack'>
        <div key={[comment.id, 'div']}className="commentItem">
            <h5>{comment.author}</h5>
            <p>{comment.body}</p>
            <ul>
            <li>{new Date(comment.created_at).toLocaleDateString()} || {new Date(comment.created_at).toLocaleTimeString()} </li>
            <li>Votes: {comment.votes}</li>
            <li>
            {username === comment.author ? <button className='deleteButton' onClick={handleClick}> Delete </button> : null}
            </li>
            </ul>
        </div>
    </Stack>
    )   
}

