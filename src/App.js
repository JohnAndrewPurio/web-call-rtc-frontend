import './App.css'
import { useSelector } from 'react-redux'
import Home from './components/Home'
import LogIn from './components/LogIn'

function App() {
  const currentUser = useSelector(state => state.currentUser)

  return (
    <div className="App">
      <h3 className="title">Web Chat Using RTC</h3>
      {
        currentUser ? <Home />: <LogIn />
      }
    </div>
  )
}

export default App
