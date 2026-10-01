export type ProjectStatus =
  | 'active'
  | 'completed'
  | 'paused'
  | 'archived'

export interface ProjectSection {
  title: string
  content: string
}

export interface Project {
  id: string

  title: string
  shortTitle?: string

  description: string
  fullDescription?: string

  technologies: string[]

  category: string

  status: ProjectStatus

  featured?: boolean

  github?: string
  demo?: string

  image?: string

  video?: string

  sections?: ProjectSection[]

  highlights?: string[]
}