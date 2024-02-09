import { useEffect, useState } from "react"
import { getTopics } from "./api"
import Loading from "./Loading"
import Error from "./Error"
import { Link } from "react-router-dom"

export default function TopicList(){
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getTopics().then((topicData) => {
            setTopics(topicData)
            setIsLoading(false)
        }).catch((error) => {
            setError(error)
        })
    }, [topics])

        if (isLoading) return <Loading />
        if (error !== null) return <Error error={error}/>       

        return(
            <main className='topicMain'>
                <h1> Topics</h1>
                <ul>
                    {topics.map((topic) => {
                        return(
                        <Link to={`/topic/${topic.slug}`} key={topic.slug} className='topicLink'> 
                        <section class='topicItem'>
                        <li>  
                            <h2>{topic.slug}</h2>
                        </li>  
                        <li>
                            {topic.description}
                        </li>
                        </section>
                        </Link>
                        )
                    })}
                </ul>
            </main>
        )
    }