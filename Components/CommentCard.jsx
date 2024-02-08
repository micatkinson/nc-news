import Stack from 'react-bootstrap/Stack';

export default function CommentCard({comment, index}){
    return (
    <Stack gap={3} key={[comment.id, index]} className='commentStack'>
        <div key={[comment.id, 'div']}className="commentItem">
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <li>{new Date(comment.created_at).toLocaleString()}</li>
            <li>Votes: {comment.votes}</li>
        </div>
    </Stack>
    )   
}