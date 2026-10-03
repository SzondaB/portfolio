import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import RootLayout from './components/layout/RootLayout'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import Certificates from './pages/Certificates/Certificates'
import CV from './pages/CV/CV'
import Privacy from './pages/Privacy/Privacy'
import NotFound from './pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/projects/:projectId',
        element: <ProjectDetails />
      },
      {
        path: '/certificates',
        element: <Certificates />
      },
      {
        path: '/cv',
        element: <CV />
      },
      {
        path: '/privacy',
        element: <Privacy />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App