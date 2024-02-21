import UserContext from "./UserContext"
import { useContext } from "react"
import { Link } from "react-router-dom"


export default function Profile(){
    const {loggedInUser} = useContext(UserContext)
    return(
    <>
        <main className='profileContainer'>
            <h1>Welcome {loggedInUser.username} </h1>
            <nav className='profile'>
                <h3>{loggedInUser.username}</h3>
                <img className='profileAv' src={loggedInUser.avatar_url}
                alt={`avatar for user ${loggedInUser.username}`}
                />
                 <h3>{loggedInUser.name}</h3>
             </nav>
             <Link to="/change-user" className='profile-link'> Change User </Link>
        </main>
    </> 

    )

    }
