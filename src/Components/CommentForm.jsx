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
          event.preventDefault();
          setSubmitting(true)
          setIsLoading(true)
          if (postComment === ""){
            setCommentError(true)
            setSubmitting(false)
            setIsLoading(false)
          } else {
            setCommentCount((commentCount) => commentCount + 1)
            const newComment = {
            article_id: id,
            author: username,
            body: postComment,
            comment_id: -1,
            created_at: new Date().toISOString(),
            votes: 0
            }
            setCommentError(false)
            setPostComment("") 
            postArticleComment(id, postComment, username)
            .then((response) => {
            addComment(newComment);
            newComment.comment_id = response.comment_id;
            setSubmitting(false)
            setIsLoading(false)
            }).catch((error) => {
              setCommentCount((commentCount) => commentCount - 1)
              removeComment(newComment.comment_id)
              setError(error)
                    setSubmitting(false)
                    setIsLoading(false)
                })
                }
              }

        if (isLoading) return <Loading />
        if(error) return <Error error={error}/>
                   
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
