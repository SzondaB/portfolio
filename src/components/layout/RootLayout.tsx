import {
  Outlet,
  ScrollRestoration
} from 'react-router-dom'

import Navbar from './Navbar'

import {
  LanguageProvider
} from '../../context/LanguageContext'

function RootLayout() {
  return (
    <LanguageProvider>
      <Navbar />

      <Outlet />

      <ScrollRestoration />
    </LanguageProvider>
  )
}

export default RootLayout