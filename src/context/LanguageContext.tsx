import {
  createContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import type {
  ReactNode
} from 'react'

import {
  translations
} from '../locales/translations'

export type Language =
  | 'hu'
  | 'en'

interface LanguageContextValue {
  language: Language

  setLanguage: (
    language: Language
  ) => void

  t:
    (typeof translations)[Language]
}

export const LanguageContext =
  createContext<
    LanguageContextValue | undefined
  >(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({
  children
}: LanguageProviderProps) {
  const [language, setLanguageState] =
    useState<Language>(() => {
      const storedLanguage =
        localStorage.getItem(
          'language'
        )

      if (
        storedLanguage === 'hu' ||
        storedLanguage === 'en'
      ) {
        return storedLanguage
      }

      return 'hu'
    })

  const setLanguage = (
    newLanguage: Language
  ) => {
    setLanguageState(newLanguage)
  }

  useEffect(() => {
    localStorage.setItem(
      'language',
      language
    )

    document.documentElement.lang =
      language
  }, [language])

  const value =
    useMemo<LanguageContextValue>(
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