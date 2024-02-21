import Stack from 'react-bootstrap/Stack';
import { Link} from 'react-router-dom';
import { calculateHoursSince } from '../utils/utils';


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
                                    <h4>{article.topic}</h4>
                                </li>
                                <li>
                                     <img src={article.article_img_url} alt={`${article.title} picture`}></img>
                                </li>
                                <li>
                                    {article.author} | |  {calculateHoursSince(article.created_at)}
                                </li>
                                <li>
                                    Votes: {article.votes}
                                </li>
                            </div>
                    </Link>
                </Stack>
            ))}
            </ul>
    </section>
    )


}