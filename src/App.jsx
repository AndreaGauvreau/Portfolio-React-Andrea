import './App.css'
import {useState, useEffect} from 'react'
import loadable from '@loadable/component'
import Chargement from './components/chargement/Chargement'

const Home = loadable(() => import('./components/Home/Home'), {
  fallback: <Chargement />,
})

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return <>{isLoading ? <Chargement /> : <Home />}</>
}

export default App
