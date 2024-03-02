import { Link } from "react-router-dom"
import UserContext from "./UserContext"
import { useContext } from "react"
import northcodersLogo from '../assets/northcoders-img.png'

export default function Nav(){
    const { loggedInUser } = useContext(UserContext)
    
    return (
        <>
        <nav className='navBar'>
            <h1 className="logo"> <img src={northcodersLogo} alt='Northcoders logo'></img> NC News</h1>
            <ul>
                <li className="links"> 
                    <Link to="/" className='nav-link'>Home </Link>
                </li>
                <li className="links"> 
                     <Link to="/topics" className='nav-link'>Topics </Link>
                </li>
                <li> 
                    <Link to="/profile" className='nav-link'> 
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
