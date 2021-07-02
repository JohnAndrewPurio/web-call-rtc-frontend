import './index.css'
import { useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import { useSelector, useDispatch } from 'react-redux'
import { setOnlineUsers } from '../../redux/actions'
import VoiceCall from '../VoiceCall'
import OnlineUsers from '../OnlineUsers'
import AccountInfo from '../AccountInfo'
import MakeACall from '../MakeACall'

const endPoint = 'localhost:4000'

export default function Home() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        const socket = socketIOClient(endPoint)

        socket.emit('logIn', currentUser)

        socket.on('onlineUsers', (data) => {
            dispatch(setOnlineUsers(data))
        })

        // eslint-disable-next-line
    }, [])

    return (
        <div className="home">
            <div className="content-area">
                <VoiceCall />
                <AccountInfo />
                <MakeACall />
            </div>
            <div className="users">
                <OnlineUsers />
            </div>
        </div>
    )
}
