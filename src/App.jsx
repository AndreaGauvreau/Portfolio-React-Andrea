import './App.css'
import Home from './components/Home/Home'
import {useState, useEffect} from 'react'
import Chargement from './components/chargement/Chargement'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return <>{isLoading ? <Chargement /> : <Home />}</>
}

export default App
