import Stack from 'react-bootstrap/Stack';
import { Link, Navigate } from 'react-router-dom';
import { getArticlesById } from './api';


export default function ArticleList({articles, setArticles}){

    const handleClick = (e, article_id) => {
        getArticlesById(article_id)
        .then((data) => {
        setArticles(data)
        })
    }

      return (
        <section>
            <ul className="articleList">
            {articles.map((article, index) => (
                    <Stack gap={3} key={['stack', index]}>
                    <div className="p-2" key={['div', index]}>
                    {article.body ? (
                        <>
                        <h3>{article.title}</h3> 
                        <p>{article.body}</p> 
                        </> 
                        ) : ( <Link to={`/articles/${article.article_id}`} key={['link', index]}  onClick={(e) => handleClick(e, article.article_id)}> 
                    {article.title} 
                    </Link>
                    )}
                    <li key={[article.author, index]}>
                        author: {article.author}
                    </li>
                    <li key={[article.created_at, index]}>
                        created_at: {article.created_at}
                    </li>
                    <li key={[article.topic, index]}>
                        topic: {article.topic}
                    </li>
                    <li key={[article.votes, index]}>
                        votes: {article.votes}
                    </li>
                    <img key={['img', index]} src={article.article_img_url} alt={`${article.title} picture`}></img>
                    </div>
                    </Stack>
            ))}
            </ul>
    </section>
    )


}