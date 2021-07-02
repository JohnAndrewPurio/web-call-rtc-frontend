import './index.css'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../redux/actions.js'

export default function LogIn() {
    const dispatch = useDispatch()
    const inputText = useRef()

    const clickHandler = () => {
        dispatch( userLogin(inputText.current.value) )
    }

    return (
        <div className="login">
            <h3>Hi, please enter your username to use the app</h3>
            <input ref={inputText} type="text" placeholder="Enter your username" autoFocus />
            <button
                onClick={clickHandler}
            >
                Let's Go
            </button>
        </div>
    )
}
