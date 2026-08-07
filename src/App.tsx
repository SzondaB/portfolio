import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import Certificates from './pages/Certificates/Certificates'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        ...
      </Routes>
    </BrowserRouter>
  )
}

export default App