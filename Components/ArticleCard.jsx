import ArticleVote from "./ArticleVote"

export default function ArticleCard({article}){
    const selected = article[0]
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
                        <ArticleVote voteCount={selected.votes}/>
                    </li>
                </ul>
            </div>
              )
}
