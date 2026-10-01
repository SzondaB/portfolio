import type { CVDocument } from '../types/cv'

export const cvDocuments: CVDocument[] = [
  {
    id: 'hu',
    title: 'Magyar nyelvű önéletrajz',
    language: 'Magyar',
    year: 2026,
    available: true,
    file: '/cv/Szonda_Benjamin_Mark_hu.pdf'
  },

  {
    id: 'en',
    title: 'Angol nyelvű önéletrajz',
    language: 'Angol',
    year: 2026,
    available: false
  }
]