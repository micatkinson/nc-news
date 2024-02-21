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
                    <Link to="/" className='nav-link'>Home </Link>
                </li>
                <li> 
                     <Link to="/topics" className='nav-link'>Topics </Link>
                </li>
                <li> 
                    <Link to="/profile" className='nav-link'> 
                    User: {loggedInUser.username}
                    <br />
                    <img src={loggedInUser.avatar_url}
                    alt={`avatar for user ${loggedInUser.username}`}
                    />
                    </Link>
        
                </li>
               
            </ul>
         </nav>
           
    
         </>


    )
}
