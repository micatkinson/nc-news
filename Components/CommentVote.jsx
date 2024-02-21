import { patchCommentVotes } from "./api"
import { useState } from "react"
import Error from "./Error"

export default function CommentVote({votes, setVotes, id}){

    const [error, setError] = useState(null)
    const[hasVoted, setHasVoted] = useState(false)

    const handleUpvote = () => {
        if(!hasVoted){
        setVotes((votes) => votes + 1)
        setHasVoted(true)
        patchCommentVotes(id, 1)
        .catch((error) => {
            setVotes((votes) => votes - 1)
            setError(error)
        })
    }
    }

    const handleDownvote = () => {
        if(!hasVoted){
        setVotes((votes) => votes - 1)
        setHasVoted(true)
        patchCommentVotes(id, -1)
        .catch((err) => {
            setVotes(true)
        })
    }
    }

    if(error) return <Error error={error}/>

    return (
        <>
        <section className='voting'>
            <button onClick={handleUpvote}> 👍</button>
             <p className='voteCounter'>{votes}</p>
            <button onClick={handleDownvote}> 👎 </button>
        </section>
        </>
    )
}


