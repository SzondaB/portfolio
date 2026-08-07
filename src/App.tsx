import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/layout/Navbar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import Certificates from './pages/Certificates/Certificates'
import NotFound from './pages/NotFound/NotFound'
import CV from './pages/CV/CV'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App