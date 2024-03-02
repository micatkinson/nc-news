import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getTopic } from "./api"
import Loading from "./Loading"
import Error from "./Error"
import ArticleList from "./ArticleList"

export default function Topic(){
    const [filteredTopic, setFilteredTopic ] = useState([])
    const {topic} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getTopic(topic).then((topicData) => {
            setFilteredTopic(topicData)
            setIsLoading(false)
            setIsLoading(false)
        })
    }, [topic])
    
    
            if (isLoading) return <Loading />
            if (error) return <Error error={error}/>        

        return(
            <main className='homeMain'>
                <h1 className='title'>{topic.charAt(0).toUpperCase() + topic.slice(1)} Articles</h1>
                <ArticleList articles={filteredTopic}/>
            </main>
        )
        
        
}
