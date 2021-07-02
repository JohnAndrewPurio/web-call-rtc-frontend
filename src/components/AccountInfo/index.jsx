import './index.css'
import { useSelector } from 'react-redux'

export default function AccountInfo() {
    const currentUser = useSelector(state => state.currentUser)

    return (
        <div className="account-info">
            <h3>Account Info</h3>
            <p>{currentUser}</p>
            <button>
                Copy ID
            </button>
        </div>
    )
}
