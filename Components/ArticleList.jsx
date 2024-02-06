import Stack from 'react-bootstrap/Stack';
import { Link, Navigate } from 'react-router-dom';
import { getArticlesById } from './api';


export default function ArticleList({articles, setArticles}){
      return (
        <section>
            <ul className="articleList">
            {articles.map((article, index) => (
                    <Stack gap={3} key={['stack', index]}>
                    <div className="p-2" key={['div', index]}>
                    <Link to={`/articles/${article.article_id}`} key={['link', index]}> 
                    {article.title} 
                    </Link>
                    <li>
                        author: {article.author}
                    </li>
                    <li>
                        created_at: {new Date(article.created_at).toLocaleString()}
                    </li>
                    <li>
                        topic: {article.topic}
                    </li>
                    <li>
                        votes: {article.votes}
                    </li>
                    <img src={article.article_img_url} alt={`${article.title} picture`}></img>
                    </div>
                    </Stack>
            ))}
            </ul>
    </section>
    )


}

