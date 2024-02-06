import { useState } from "react"

export default function ArticleVote({voteCount}){
    const [votes, setVotes] = useState(voteCount)
    return (
        <>
        <h3> Vote for Article</h3>
        <button> Upvote 👍</button>
        <button> Downvote 👎 </button>
        </>
    )
}