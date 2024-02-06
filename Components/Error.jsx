export default function Error({error}){
    return (
    <div className="error">
     <h2>Error...</h2>
     <p>The page has encountered an error while loading</p>
     <pre>
        {error.status} {error.statusText}
     </pre>
     </div>
    )
}

