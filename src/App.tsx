import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import { Suspense } from 'react'
import { AppRouter } from './Router'
import Spinner from './components/statics/Spinner'

function App() {


  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <AppRouter />
      </Suspense>
    </Router>
  )
}

export default App
