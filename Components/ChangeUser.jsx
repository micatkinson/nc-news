import { useEffect, useState, useContext } from "react"
import { getUsers } from "./api"
import UserContext from "./UserContext"
import { useNavigate } from "react-router-dom"


export default function ChangeUser(){
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const { setLoggedInUser } = useContext(UserContext)

    useEffect(() => {
        getUsers().then((userData) => {
            setUsers(userData)
        })
    }, [])
                return (
                    <main className='profileContainer'>
                        <h1> Pick User</h1>
                        {users.map((user, index) => {
                            return(
                            <div key={index} className='profile'>
                                <div className='profileAv'>
                                    <h3>{user.username}</h3>
                                    <img user='profileAv' src={user.avatar_url}
                                    alt={`avatar for user ${user.username}`}
                                    />
                                    <h3>{user.name}</h3>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setLoggedInUser(user)
                                        navigate(-1);
                                    }}> Log-in</button>
                                </div>
                            </div>
                            )
                        })
                    }

                    </main>
                )
}
                