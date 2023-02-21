import './App.css'
import {useState, useEffect} from 'react'
import loadable from '@loadable/component'
import Chargement from './components/chargement/Chargement'
import {Route, Routes} from 'react-router-dom'

const Home = loadable(() => import('./components/Home/Home'), {
  fallback: <Chargement />,
})
const Projets = loadable(() => import('./components/Projects/Projets'), {
  fallback: <Chargement />,
})
const DetailProjet = loadable(() => import('./components/Projects/ProjetsId'), {
  fallback: <Chargement />,
})
function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={isLoading ? <Chargement /> : <Home />} />
        <Route
          path="/projets"
          element={isLoading ? <Chargement /> : <Projets />}
        />
        <Route
          path="/projets/:id"
          element={isLoading ? <Chargement /> : <DetailProjet />}
        />
      </Routes>
    </>
  )
}

export default App
