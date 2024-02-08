import { useState } from "react";
import { postArticleComment } from "./api";
import UserContext from "./UserContext"
import { useContext } from "react"
import Error from "./Error";
import Loading from "./Loading";


export default function CommentForm({id, setCommentCount, addComment, removeComment}){
      const {loggedInUser} = useContext(UserContext)
       const { username } = loggedInUser;
       const [postComment, setPostComment] = useState("")
       const [commentError, setCommentError] = useState(false)
       const [error, setError] = useState(null)
       const [submitting, setSubmitting] = useState(false)
       const [isLoading, setIsLoading] = useState(false)


        const handleSubmit = (event) => {
          setIsLoading(true)
          event.preventDefault();
          if (postComment === ""){
            setCommentError(true)
          } else {
            setSubmitting(true)
            setCommentCount((commentCount) => commentCount + 1)
            const newComment = {
            article_id: id,
            author: username,
            body: postComment,
            comment_id: 10000,
            created_at: new Date().toISOString(),
            votes: 0
            }
            addComment(newComment);
            setCommentError(false)
            setPostComment("") 
            postArticleComment(id, postComment, username)
            .then((response) => {
            newComment.comment_id = response.comment_id;
            setSubmitting(false)
            setIsLoading(false)
            }).catch((err) => {
              setCommentCount((commentCount) => commentCount - 1)
              removeComment(newComment.comment_id)
              setError({
                    status: 408,
                    statusText: 'Unable to add comment, please retry'})
                    setSubmitting(false)
                    setIsLoading(false)
                })
                }
              }

        if (isLoading) return <Loading />
        if(error) return <Error message={error}/>
                   
        return (
          <div className="commentForm">
            <form id="postComment" onSubmit={handleSubmit}>
              <textarea 
                className={`postComment ${commentError ? 'error' : ''}`}
                id="postComment"
                name="textComment"
                autoComplete="off"
                placeholder={commentError ? 'Can\'t post empty comment' : "Add comment"}
                value={postComment}
                onChange={(e) => {
                    setPostComment(e.target.value)
                    setCommentError(false)
                }
            }>
             </textarea>
              <button type="submit" disabled={submitting}>Post</button>
            </form>
          </div>
        )
    }
