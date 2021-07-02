import './index.css'
import { useRef } from 'react'

export default function MakeACall() {
    const calleeID = useRef()

    return (
        <div className="make-a-call">
            <h3>Make A Call</h3>
            <input ref={calleeID} type="text" placeholder="Username you want to Call" />
            <button>
                Call
            </button>
        </div>
    )
}
