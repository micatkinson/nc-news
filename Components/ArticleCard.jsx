import Stack from 'react-bootstrap/Stack';

export default function ArticleCard({articles}){
      return (
        <section>
            {articles.map((article, index) => (
                <ul className='articleList' key={[article.id, index]}>
                    <Stack gap={3}>
                    <div className="p-2">
                    <h3> {article.title} </h3>
                    <li>
                        article_id: {article.article_id}
                    </li>
                    <li>
                        author: {article.author}
                    </li>
                    <li>
                        created_at: {article.created_at}
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
                    </ul>
            ))}
        </section>
    )


}