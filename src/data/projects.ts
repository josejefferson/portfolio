import { IBadge } from './badges'
import { IConcept } from './concepts'
import { CHATBOT } from './projects/chatbot'
import { CRANIO } from './projects/cranio'
import { LAMPYS } from './projects/lampys'
import { VAGAZERO } from './projects/vagazero'
import { ITechnology } from './technologies'

export interface IProject {
  id?: string
  name: string
  description: string
  images: string[]
  mainTechnologies?: ITechnology[]
  technologies: ITechnology[]
  link?: string
  github?: string
  badges?: IBadge[]
  concepts?: IConcept[]
  detailImages?: {
    src: string
    title: string
    description?: string
    technologies?: ITechnology[]
  }[]
}

export const PROJECTS: IProject[] = [VAGAZERO, CHATBOT, LAMPYS, CRANIO]
