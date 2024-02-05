import { useContext } from "react"
import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav>
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
                    <Link to="/user">User </Link>
                </li>
            </ul>
            <header>
                <h1> Northcoders</h1>
            </header>
         </nav>
    )
}