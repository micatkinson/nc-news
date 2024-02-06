import ArticleVote from "./ArticleVote"

export default function ArticleCard({article}){
    const selected = article[0]
            return(
            <>
                <h1>{selected.title}</h1>
                <p>{selected.body}</p>
                <ul>
                    <li> 
                        {selected.author}
                    </li>
                    <li> 
                        {selected.comment_count}
                    </li>
                    <li> 
                        {selected.created_at}
                    </li>
                    <li> 
                        {selected.topic}
                    </li>
                    <li> 
                        {selected.votes}
                    </li>
                    <li>
                        <img src= {selected.article_img_url} alt={`Image for${selected.title}`}/>
                    </li>
                    <li>
                        <ArticleVote voteCount={selected.votes}/>
                    </li>
                </ul>

            </>
              )
}
