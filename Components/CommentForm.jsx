import { useState } from "react";
import { postArticleComment } from "./api";
import UserContext from "./UserContext"
import { useContext } from "react"
import Error from "./Error";


export default function CommentForm({id, setCommentCount, setLoadedComments}){
      const {loggedInUser} = useContext(UserContext)
       const { username } = loggedInUser;
       const [postComment, setPostComment] = useState("")
       const [commentError, setCommentError] = useState(false)
       const [error, setError] = useState(null)
       const [submitting, setSubmitting] = useState(false)


       const newComment = {
          article_id: id,
          author: username,
          body: postComment,
          comment_id: new Date(),
          created_at: new Date().toISOString(),
          votes: 0
       }

       console.log(newComment)

        const handleSubmit = (event) => {
          event.preventDefault();
          if (postComment === ""){
            setCommentError(true)
          }
          if (postComment !== ""){
            setSubmitting(true)
            setCommentCount((commentCount) => commentCount + 1)
            setLoadedComments((currentComments) => {
              return [...currentComments, newComment]
            })
            setCommentError(false)
            setPostComment("") 
            postArticleComment(id, postComment, username)
            .then(() => {
            setSubmitting(false)
            }).catch((err) => {
              setCommentCount((commentCount) => commentCount - 1)
              setError({
                     status: 408,
                    statusText: 'Unable to add comment, please retry'})
                    setSubmitting(false)
                })
                } else {
                    setSubmitting(false)
                }
              }

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
