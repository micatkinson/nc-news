import Stack from 'react-bootstrap/Stack';

export default function CommentList({comments}){
    return (
    <section>
        <h2>Comments</h2>
        <ul>
            {comments.map((comment) => (
                <Stack gap={3}>
                <div key={[comment.id, 'div']} className="p-2">
                <h4 key={[comment.id, 'title']}>{comment.author}</h4>
                <p key={[comment.id, 'p']}>{comment.body}</p>
                <li key={[comment.id, 'li']}>Votes: {comment.votes}</li>
                </div>
                </Stack>
            ))}
        </ul>
    </section>
    )
}