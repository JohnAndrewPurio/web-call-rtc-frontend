import './index.css'
import { useSelector } from "react-redux"

export default function VoiceCall() {
    const currentUser = useSelector(state => state.currentUser)

    const getMedia = async (constraints) => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints)

            const audio = new Audio

            
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="voice-call">
            <h3>{currentUser}</h3>
        </div>
    )
}
