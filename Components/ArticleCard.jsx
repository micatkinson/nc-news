import { useState } from "react"
import ArticleVote from "./ArticleVote"
import { Link } from "react-router-dom"
import { calculateHoursSince } from "../utils/utils"

export default function ArticleCard({article}){
    const selected = article[0]
    const id = selected.article_id

    const [votes, setVotes] = useState(selected.votes)

            return(
            <div className='individualArticle'>
                <h1>{selected.title}</h1>
                <Link to={`/topic/${selected.topic}`}>{selected.topic}</Link>
                    <p className="articleBody">{selected.body} </p>
                <ul>
                    <li>
                        <img src= {selected.article_img_url} alt={`Image for${selected.title}`}/>
                    </li>
                    <li>
                    Author: {selected.author}  ||    {calculateHoursSince(selected.created_at)}
                    </li>
                    <li>
                        <ArticleVote votes={votes} setVotes={setVotes} id={id}/>
                    </li>
                </ul>
            </div>
              )
}
