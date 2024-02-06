import Stack from 'react-bootstrap/Stack';

export default function CommentList({comments, article}){
    const selected = article[0]
    return (
    <section className='comments'>
        <h2>{selected.comment_count} Comments</h2>
        <ul>
            {comments.map((comment, index) => (
                <Stack gap={3} key={[comment.id, index]} className='commentStack'>
                    <div key={[comment.id, 'div']}className="commentItem">
                        <h4>{comment.author}</h4>
                        <p>{comment.body}</p>
                        <li>{new Date(comment.created_at).toLocaleString()}</li>
                        <li>Votes: {comment.votes}</li>
                    </div>
                </Stack>
            ))}
        </ul>
    </section>
    )
}

