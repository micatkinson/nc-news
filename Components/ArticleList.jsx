import Stack from 'react-bootstrap/Stack';
import { Link, Navigate } from 'react-router-dom';


export default function ArticleList({articles}){
      return (
        <section>
            <ul className="articleList">
            {articles.map((article, index) => (
                    <Stack gap={3} key={['stack', index]}>
                        <Link to={`/articles/${article.article_id}`} key={['link', index]} className='articleLink'> 
                            <div className="articleItem" key={['div', index]}>
                                <li>
                                    <h3>{article.title}</h3>
                                </li>
                                <li className='topic'>
                                    {article.topic}
                                </li>
                                <li>
                                     <img src={article.article_img_url} alt={`${article.title} picture`}></img>
                                </li>
                                <li>
                                     author: {article.author}
                                </li>
                                <li>
                                     {new Date(article.created_at).toLocaleDateString()} {new Date(article.created_at).toLocaleTimeString()}
                                </li>
                                <li>
                                    votes: {article.votes}
                                </li>
                            </div>
                    </Link>
                </Stack>
            ))}
            </ul>
    </section>
    )


}