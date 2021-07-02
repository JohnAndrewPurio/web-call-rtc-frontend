import './index.css'
import { useSelector } from 'react-redux'

export default function OnlineUsers() {
    const otherUsers = useSelector(state => state.otherUsers)

    return (
        <div className="online-users">
            <h3>List of Online Users</h3>
            <ul>
                {
                    otherUsers.map( user => (
                        <li key={user.name}>
                            <p>{user.name}</p>
                            <button>Call</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
