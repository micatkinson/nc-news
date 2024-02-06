import { useState } from "react"
import { patchArticleVotes } from "./api"

export default function ArticleVote({votes, setVotes, id}){
    
    const [error, setError] = useState(null)

    const handleUpvote = () => {
        setVotes((votes) => votes + 1)
        patchArticleVotes(id, 1)
        .catch((err) => {
            setVotes((votes) => votes - 1)
            setError('Unable to register count, please retry')
        })
    }

    const handleDownvote = () => {
        setVotes((votes) => votes - 1)
        patchArticleVotes(id, -1)
        .catch((err) => {
            setVotes((votes) => votes + 1)
            setError('Unable to register count, please retry')
        })
    }

    return (
        <>
        <h3> Vote for Article</h3>
        <p className='voteCounter'>{votes}</p>
        {error !== null && <Error error={error} />}
        <button onClick={handleUpvote}> Upvote 👍</button>
        <button onClick={handleDownvote}> Downvote 👎 </button>
        </>
    )
}

