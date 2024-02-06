import { useState } from "react"
import ArticleVote from "./ArticleVote"

export default function ArticleCard({article}){
    const selected = article[0]
    const id = selected.article_id

    const [votes, setVotes] = useState(selected.votes)

            return(
            <div className='individualArticle'>
                <h1>{selected.title}</h1>
                    <p className="articleBody">{selected.body}
                        <br/> 
                        <br/>
                        Author: {selected.author}
                        <br/>
                    {new Date(selected.created_at).toLocaleDateString()} {new Date(selected.created_at).toLocaleTimeString()}
                        <br/>
                        Category: {selected.topic}
                    </p>
                <ul>
                    <li>
                        <img src= {selected.article_img_url} alt={`Image for${selected.title}`}/>
                    </li>
                    <li>
                        <ArticleVote votes={votes} setVotes={setVotes} id={id}/>
                    </li>
                </ul>
            </div>
              )
}
