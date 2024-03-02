import Stack from 'react-bootstrap/Stack';
import UserContext from "./UserContext"
import { useContext, useState } from "react"
import { deleteComment } from "./api";
import Error from './Error';
import { calculateHoursSince } from '../utils/utils'
import CommentVote from './CommentVote';


export default function CommentCard({comment, index, setCommentCount}){
    const {loggedInUser} = useContext(UserContext)
    const { username } = loggedInUser;
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(comment.votes)

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
    <Stack gap={3} key={[comment.comment_id, index]} className='commentStack'>
        <div className="commentItem">
            <p>{comment.body}</p>
            <ul>
            <li> 
                {comment.author} || {calculateHoursSince(comment.created_at)}
            </li> 
            <li>
                <CommentVote votes={votes} setVotes={setVotes} id={comment.comment_id}/>
            </li>
            <li>
                {username === comment.author ? <button className='deleteButton' onClick={handleClick}> Delete </button> : null}
            </li>
            </ul>
        </div>
    </Stack>
    )   
}

