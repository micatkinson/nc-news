import { Link } from "react-router-dom"

export default function Nav(){
    return (
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
                    <Link to="/user">User </Link>
                </li>
            </ul>
         </nav>
    )
}
