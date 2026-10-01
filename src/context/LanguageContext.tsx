import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react'

import {
  translations,
  type Language
} from '../locales/translations'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof translations)[Language]
}

export const LanguageContext =
  createContext<LanguageContextValue | undefined>(
    undefined
  )

interface LanguageProviderProps {
  children: ReactNode
}

function getInitialLanguage(): Language {
  const savedLanguage =
    localStorage.getItem('language')

  if (
    savedLanguage === 'hu' ||
    savedLanguage === 'en'
  ) {
    return savedLanguage
  }

  return 'hu'
}

export function LanguageProvider({
  children
}: LanguageProviderProps) {
  const [language, setLanguage] =
    useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(
      'language',
      language
    )

    document.documentElement.lang =
      language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language]
    }),
    [language]
  )

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  )
}