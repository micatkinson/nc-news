export default function CommentList({comments}){
    return (
    <section>
        <h2>Comments</h2>
        <ul>
            {comments.map((comment) => (
                <div key={[comment.id, 'div']} className="comments">
                <h4 key={[comment.id, 'title']}>{comment.author}</h4>
                <p key={[comment.id, 'p']}>{comment.body}</p>
                <li key={[comment.id, 'li']}>{comment.votes}</li>
                </div>
            ))}
        </ul>
    </section>
    )
}