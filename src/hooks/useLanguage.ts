import { useContext } from 'react'

import {
  LanguageContext
} from '../context/LanguageContext'

function useLanguage() {
  const context =
    useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'A useLanguage csak LanguageProvideren belül használható.'
    )
  }

  return context
}

export default useLanguage