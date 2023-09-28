import { IBadge } from './badge'
import { ITechnology } from './tecnology'

export interface IProject {
  id?: string
  name: string
  description: string
  image: string
  technologies: ITechnology[]
  link?: string
  github?: string
  badges?: IBadge[]
}
