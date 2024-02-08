import { Link } from "react-router-dom"
import UserContext from "./UserContext"
import { useContext } from "react"

export default function Nav(){
    const { loggedInUser } = useContext(UserContext)

    return (
        <>
        <nav className='navBar'>
            <h1 className="logo"> /\ NC News</h1>
            <ul>
                <li> 
                    <Link to="/">Home </Link>
                </li>
                <li> 
                     <Link to="/topics">Topics </Link>
                </li>
                <li> 
                     <Link to="/about">About </Link>
                </li>
                <li> 
                    <Link to="/profile">User: {loggedInUser.username} </Link>
                    <img src={loggedInUser.avatar_url}
                    alt={`avatar for user ${loggedInUser.username}`}
                    />
                </li>
               
            </ul>
         </nav>
           
    
         </>


    )
}
