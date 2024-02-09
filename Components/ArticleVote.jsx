import { useState } from "react"
import { patchArticleVotes } from "./api"
import Error from "./Error"

export default function ArticleVote({votes, setVotes, id}){
    
    const [error, setError] = useState(null)
    const[hasVoted, setHasVoted] = useState(false)

    const handleUpvote = () => {
        if(!hasVoted){
        setVotes((votes) => votes + 1)
        setHasVoted(true)
        patchArticleVotes(id, 1)
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
        patchArticleVotes(id, -1)
        .catch((err) => {
            setVotes(true)
        })
    }
    }

    if(error) return <Error error={error}/>

    return (
        <>
        <h3> Vote for Article</h3>
        <p className='voteCounter'>{votes}</p>
        <button onClick={handleUpvote}> Upvote 👍</button>
        <button onClick={handleDownvote}> Downvote 👎 </button>
        </>
    )
}

